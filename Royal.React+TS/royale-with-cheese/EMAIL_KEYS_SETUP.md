# 📧 EmailJS Setup - Royale with Cheese

## ✅ Current Status
- **Public Key**: `EZWvwtMK0rpBEhkbU` ✅ (Already added to code)
- **Private Key**: `TvdpvBbTcqtjIWgkznFap` ✅ (For reference)
- **Service ID**: Waiting for owner tomorrow 🕐
- **Email Destination**: `royalewithcheese313@gmail.com` ✅

## 🚀 What's Ready Now
All forms are configured and will send to `royalewithcheese313@gmail.com`:
- ✅ Contact Form
- ✅ Franchise Inquiry
- ✅ Newsletter Signup
- ✅ Reservation Requests
- ✅ Order Notifications

## 📋 Tomorrow's Task (Owner)
1. **Get Service ID** from EmailJS dashboard
2. **Update the code** with: `REACT_APP_EMAILJS_SERVICE_ID=your_service_id`

## 🔧 How to Add Service ID Tomorrow

### Option 1: Environment Variable (Recommended)
Create `.env` file in project root:
```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=template_contact
```

### Option 2: Direct Code Update
In `src/hooks/useEmailService.ts`, update line 6:
```javascript
SERVICE_ID: 'your_actual_service_id_here', // Replace this tomorrow
```

## 📱 EmailJS Dashboard Setup
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Login with the account that has these keys
3. Go to **"Email Services"** → Copy the **Service ID**
4. Go to **"Email Templates"** → Create template → Copy **Template ID**

## 🎯 Template Setup
Create an email template with these variables:
```
Subject: {{subject}} - Royale with Cheese

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Type: {{form_type}}

Message:
{{message}}

{{#reservation_date}}Date: {{reservation_date}}{{/reservation_date}}
{{#reservation_time}}Time: {{reservation_time}}{{/reservation_time}}

Sent: {{timestamp}}
Website: {{website_url}}
```

## 🚨 Fallback System
If email fails, forms automatically show:
**"Call Us Instead: (313) 315-3014"**

## 🔒 Security Notes
- ✅ Public key is safe to use in frontend code
- ✅ Private key is for reference only (not used in frontend)
- ✅ All emails go to `royalewithcheese313@gmail.com`

---

**Ready to go live once Service ID is added tomorrow!** 🚀 