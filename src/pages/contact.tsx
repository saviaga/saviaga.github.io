import React, { useState, useMemo } from 'react';
import PageLayout from '../components/layouts/PageLayout';
import H, { hLevel } from '../components/shared/H';
import Button from '../components/shared/Button';
import Alert, { ErrorAlert } from '../components/shared/Alert';

const EMAIL = 'floressaviaga.c@northeastern.edu';

function generateMathQuestion(): { a: number; b: number } {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { a, b };
}

const ContactPage = (): React.ReactElement => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const mathQuestion = useMemo(() => generateMathQuestion(), []);
  const correctAnswer = mathQuestion.a + mathQuestion.b;

  const inputClass = 'border py-2 px-3 mb-3 rounded border-gray-300 border-solid appearance-none w-full';

  const isCaptchaCorrect = captchaAnswer.trim() !== '' && parseInt(captchaAnswer.trim(), 10) === correctAnswer;
  const isFormValid = name.trim() !== '' && subject.trim() !== '' && message.trim() !== '' && isCaptchaCorrect && honeypot === '';

  const handleSubmit = (): void => {
    if (honeypot !== '') return;

    if (!isCaptchaCorrect) {
      setCaptchaError('Incorrect answer. Please try again.');
      return;
    }

    setCaptchaError(null);

    const body = `Hi, my name is ${name.trim()}.\n\n${message.trim()}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <PageLayout>
      <H level={hLevel.h1}>Contact</H>

      <div className="mt-8">
        <H level={hLevel.h2}>Get in Touch</H>
        <p className="mt-4 font-light">
          I&apos;m always interested in discussing research collaborations, speaking
          opportunities, and new projects in Human-Centered AI and HCI.
        </p>
      </div>

      <div className="mt-8 max-w-lg">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            placeholder="Your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            required
          />

          <label className="text-sm font-medium mb-1" htmlFor="contact-subject">
            Subject
          </label>
          <input
            id="contact-subject"
            placeholder="Email subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputClass}
            required
          />

          <label className="text-sm font-medium mb-1" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} min-h-[120px]`}
            rows={5}
            required
          />

          {/* Honeypot field — hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <label className="text-sm font-medium mb-1" htmlFor="contact-captcha">
            What is {mathQuestion.a} + {mathQuestion.b}?
          </label>
          <input
            id="contact-captcha"
            placeholder="Your answer"
            type="text"
            value={captchaAnswer}
            onChange={(e) => {
              setCaptchaAnswer(e.target.value);
              setCaptchaError(null);
            }}
            className={inputClass}
            required
          />

          {captchaError && (
            <div className="mb-3">
              <Alert type={ErrorAlert}>{captchaError}</Alert>
            </div>
          )}

          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Send Email
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
