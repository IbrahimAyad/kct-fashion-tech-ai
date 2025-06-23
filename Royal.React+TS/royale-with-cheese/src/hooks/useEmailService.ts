import { useState } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration with provided API keys
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_royale', // Owner will provide tomorrow
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_contact',
  PUBLIC_KEY: 'EZWvwtMK0rpBEhkbU', // Provided public key
  PRIVATE_KEY: 'TvdpvBbTcqtjIWgkznFap' // Provided private key (for reference)
};

export interface EmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  message: string;
  subject?: string;
  form_type: 'contact' | 'franchise' | 'reservation' | 'newsletter' | 'order';
  restaurant_name?: string;
  order_details?: string;
  reservation_date?: string;
  reservation_time?: string;
  party_size?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const useEmailService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastResponse, setLastResponse] = useState<EmailResponse | null>(null);

  // Initialize EmailJS (call this once in your app)
  const initializeEmailJS = () => {
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      return true;
    } catch (error) {
      // Handle EmailJS initialization error silently in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to initialize EmailJS:', error);
      }
      return false;
    }
  };

  // Send email using EmailJS
  const sendEmail = async (emailData: EmailData): Promise<EmailResponse> => {
    setIsLoading(true);
    
    try {
      // Prepare template parameters
      const templateParams = {
        ...emailData,
        to_email: 'royalewithcheese313@gmail.com', // Restaurant email
        reply_to: emailData.from_email,
        timestamp: new Date().toLocaleString(),
        website_url: window.location.origin
      };

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      const successResponse: EmailResponse = {
        success: true,
        message: getSuccessMessage(emailData.form_type)
      };

      setLastResponse(successResponse);
      return successResponse;

    } catch (error: any) {
      const errorResponse: EmailResponse = {
        success: false,
        message: 'Failed to send email. Please try calling us directly.',
        error: error.message || 'Unknown error'
      };

      setLastResponse(errorResponse);
      return errorResponse;
    } finally {
      setIsLoading(false);
    }
  };

  // Send contact form
  const sendContactForm = async (data: {
    name: string;
    email: string;
    phone?: string;
    message: string;
    subject?: string;
  }): Promise<EmailResponse> => {
    return sendEmail({
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      subject: data.subject || 'General Inquiry',
      form_type: 'contact'
    });
  };

  // Send franchise inquiry
  const sendFranchiseInquiry = async (data: {
    name: string;
    email: string;
    phone: string;
    message?: string;
  }): Promise<EmailResponse> => {
    return sendEmail({
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message || 'I am interested in franchise opportunities.',
      subject: 'Franchise Inquiry',
      form_type: 'franchise'
    });
  };

  // Send reservation request
  const sendReservationRequest = async (data: {
    name: string;
    email?: string;
    phone: string;
    date: string;
    time: string;
    partySize: string;
    message?: string;
  }): Promise<EmailResponse> => {
    return sendEmail({
      from_name: data.name,
      from_email: data.email || '',
      phone: data.phone,
      message: data.message || 'Table reservation request',
      subject: 'Table Reservation Request',
      form_type: 'reservation',
      reservation_date: data.date,
      reservation_time: data.time,
      party_size: data.partySize
    });
  };

  // Send newsletter signup
  const sendNewsletterSignup = async (data: {
    email: string;
    name?: string;
  }): Promise<EmailResponse> => {
    return sendEmail({
      from_name: data.name || 'Newsletter Subscriber',
      from_email: data.email,
      message: 'Newsletter subscription request',
      subject: 'Newsletter Signup',
      form_type: 'newsletter'
    });
  };

  // Send order notification (for complex orders)
  const sendOrderNotification = async (data: {
    name: string;
    email: string;
    phone: string;
    orderDetails: string;
    orderType: 'pickup' | 'delivery';
    total: string;
  }): Promise<EmailResponse> => {
    return sendEmail({
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: `Order Type: ${data.orderType}\nTotal: $${data.total}\n\nOrder Details:\n${data.orderDetails}`,
      subject: 'New Order Notification',
      form_type: 'order',
      order_details: data.orderDetails
    });
  };

  // Get success message based on form type
  const getSuccessMessage = (formType: string): string => {
    switch (formType) {
      case 'contact':
        return '✅ Message sent! We\'ll get back to you within 24 hours.';
      case 'franchise':
        return '🚀 Franchise inquiry sent! Our team will contact you within 24 hours.';
      case 'reservation':
        return '📅 Reservation request sent! We\'ll call you within 30 minutes to confirm.';
      case 'newsletter':
        return '📧 Welcome to Royal Updates! You\'re now subscribed to our newsletter.';
      case 'order':
        return '🍔 Order notification sent! We\'ll contact you to confirm your order.';
      default:
        return '✅ Email sent successfully!';
    }
  };

  // Fallback to phone call if email fails
  const fallbackToPhone = () => {
    window.location.href = 'tel:+13133153014';
  };

  return {
    sendEmail,
    sendContactForm,
    sendFranchiseInquiry,
    sendReservationRequest,
    sendNewsletterSignup,
    sendOrderNotification,
    initializeEmailJS,
    fallbackToPhone,
    isLoading,
    lastResponse
  };
};

export default useEmailService; 