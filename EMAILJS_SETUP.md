# EmailJS Setup Guide

The contact form uses **EmailJS** to deliver real emails to your inbox — no backend needed. Follow these one-time steps to enable it.

---

## 1. Create an EmailJS account

1. Go to https://www.emailjs.com/ and click **Sign Up Free** (the free tier gives 200 emails/month).
2. Verify your email and log in.

---

## 2. Add an email service

1. In the dashboard, go to **Email Services** → **Add New Service**.
2. Choose your provider (**Gmail** is recommended — easiest setup).
3. Click **Connect Account**, sign in with the Google account where you want to receive messages (e.g. `ay9824810@gmail.com`).
4. Give it a name (e.g. *Portfolio Inbox*) and click **Create Service**.
5. **Copy the Service ID** that appears — it looks like `service_abc1234`.

---

## 3. Create an email template

1. Go to **Email Templates** → **Create New Template**.
2. Set up the template like this:

   **Subject:**
   ```
   New portfolio message from {{name}}
   ```

   **Content (Body):**
   ```
   You got a new message from your portfolio website!

   From:    {{name}}
   Email:   {{email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```

   **To Email:** your own email address (where messages should land).

   **Reply To:** `{{email}}`  ← important, so you can reply directly to the sender.

3. Click **Save**.
4. **Copy the Template ID** — looks like `template_xyz5678`.

> The form sends these field names: `name`, `email`, `subject`, `message`. Make sure your template uses the same `{{variable}}` names.

---

## 4. Get your Public Key

1. Go to **Account** → **General** in the left sidebar.
2. **Copy your Public Key** — looks like `Abc123XyZ...`.

---

## 5. Configure the project

Open the `.env` file at the project root and replace the placeholders:

```bash
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=Abc123XyZ...
```

Then **restart the dev server** so Vite picks up the new env vars:

```bash
npm run dev
```

---

## 6. Test it

1. Open http://localhost:5173/
2. Scroll to the **Contact** section.
3. Fill out the form and click **Send Message**.
4. Check your inbox — you should receive the message within seconds.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Form shows *"Email service not configured yet"* | You haven't replaced the `xxxxxxx` placeholders in `.env` — or the dev server wasn't restarted after editing `.env`. |
| `403` / *"The Public Key is invalid"* | Double-check you copied the **Public Key** (not the private key) and that it matches your account. |
| `400` / *"The template ID not found"* | Service ID or Template ID has a typo, or they belong to different accounts. |
| Email not arriving | Check spam folder; verify the **To Email** in your template; check the EmailJS dashboard's **History** tab to see if delivery failed. |
| CORS error in console | EmailJS allows all origins by default for the free tier — if you've enabled "Allowed Origins" in dashboard, add your dev URL (`http://localhost:5173`) and your production domain. |

---

## Security note

The public key is **safe to expose in the frontend** — that's how EmailJS is designed. To prevent abuse:

1. In the EmailJS dashboard go to **Account → Security** and turn on **reCAPTCHA** if you start getting spam.
2. You can also restrict requests to specific domains under **Account → Security → Allowed Origins**.

Never put the **Private Key** in your frontend code.
