import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

// Fonction pour échapper les caractères spéciaux et éviter le XSS
const sanitizeInput = (input) => {
    return input.replace(/[&<>"'/]/g, (char) => {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;',
        };
        return map[char] || char;
    });
};

const Contact = ({language}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert('Please complete the reCAPTCHA!');
            return;
        }

        const sanitized_name = sanitizeInput(name);
        const sanitized_email = sanitizeInput(email);
        const sanitized_message = sanitizeInput(message);

        const serviceId = 'service_bub67qf';
        const templateId = 'template_yn6df5i';
        const publicKey = '2RGUMSFt0KYMEGOj6';

        const templateParams = {
            from_name: sanitized_name,
            from_email: sanitized_email,
            to_name: 'Matteo',
            message: sanitized_message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
            {alert(
                language === 'FR'
                    ? 'Merci pour votre message! Je vous répondrai dès que possible.'
                : language === 'EN'
                    ? 'Thanks for your message! I will get back to you as soon as possible.'
                : language === 'IT'
                    ? 'Grazie per il tuo messaggio! Ti risponderò il prima possibile.'
                : 'Thank you for your message!'
            )};
            setName('');
            setEmail('');
            setMessage('');
            setCaptchaValue(null);
        }).catch((error) => {
            console.log('Error sending email', error.text);
        });
    }

    return (
        <div className="contact-container">
        <form onSubmit={handleSubmit}>
            <div className="infos">
            <input 
                type="text" 
                name="name" 
                placeholder={
                    language === 'FR'
                        ? 'Nom'
                    : language === 'EN'
                        ? 'Name'
                    : language === 'IT'
                        ? 'Nome'
                    : null
                } 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                maxLength="100" 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                maxLength="150"
            />
            </div>
            <textarea 
                value={message} 
                placeholder={
                    language === 'FR'
                        ? 'Ecrivez votre message ici...'
                    : language === 'EN'
                        ? 'Write your message here...'
                    : language === 'IT'
                        ?'Scrivi il tuo messaggio qui...'
                    : null
                } 
                onChange={(e) => setMessage(e.target.value)} 
                required 
                maxLength="1000" 
            />
            <div className="buttz">
                <ReCAPTCHA
                    sitekey="6LfR2sUqAAAAAFHTWDpXqeEYnS-A5sxv6rWeygDt" 
                    onChange={(value) => setCaptchaValue(value)} 
                />
                <button type="submit" className='send-button'>
                    {language === 'FR'
                        ? 'Envoyer'
                    : language === 'EN'
                        ? 'Send'
                    : language === 'IT'
                        ? 'Invia'
                    : null
                }
                </button>
            </div>
        </form>
        </div>
    );
}

export default Contact;
