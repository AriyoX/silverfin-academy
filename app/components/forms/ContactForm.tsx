import React, { useState } from 'react';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6">
        <h3 className="text-lg font-semibold text-green-800">Thank you!</h3>
        <p className="mt-2 text-sm text-green-600">
          We&apos;ve received your message and will get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm text-green-600 hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${
            errors.name ? 'border-red-300' : 'border-secondary/30'
          }`}
          placeholder="Full name"
          required
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${
            errors.email ? 'border-red-300' : 'border-secondary/30'
          }`}
          placeholder="Email"
          required
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="rounded-xl border border-secondary/30 px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
        placeholder="Phone"
      />

      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`min-h-[120px] w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-red-300' : 'border-secondary/30'
          }`}
          placeholder="How can we help?"
          required
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        disabled={isSubmitting}
        size="lg"
        className="mt-2"
      >
        {isSubmitting ? 'Sending...' : 'Send enquiry'}
      </Button>
    </form>
  );
};