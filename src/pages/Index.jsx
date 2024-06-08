import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Index = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  const content = {
    en: {
      nav: ['Home', 'Services', 'Testimonials', 'Contact'],
      hero: {
        headline: 'Unlock Your Car\'s Potential',
        subheadline: 'Professional Chip Tuning and Coding Services',
        cta: 'Get Started'
      },
      services: {
        title: 'Our Services',
        items: [
          'ECU Remapping',
          'Performance Tuning',
          'Diagnostic Services',
          'Custom Coding'
        ]
      },
      testimonials: {
        title: 'What Our Customers Say',
        reviews: [
          'Fantastic service! My car runs smoother and faster.',
          'Highly recommend their tuning services.',
          'Professional and reliable. Great results!'
        ]
      },
      contact: {
        title: 'Contact Us',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send'
        },
        details: {
          address: '123 Tuning St, Car City, CA',
          phone: '+1 234 567 890',
          email: 'info@cartuning.com'
        }
      },
      footer: {
        follow: 'Follow Us',
        info: '© 2023 Car Tuning. All rights reserved.'
      }
    },
    pl: {
      nav: ['Strona główna', 'Usługi', 'Opinie', 'Kontakt'],
      hero: {
        headline: 'Odblokuj Potencjał Swojego Samochodu',
        subheadline: 'Profesjonalne Usługi Chip Tuning i Kodowanie',
        cta: 'Zacznij Teraz'
      },
      services: {
        title: 'Nasze Usługi',
        items: [
          'Remapowanie ECU',
          'Tuning Wydajności',
          'Usługi Diagnostyczne',
          'Kodowanie Niestandardowe'
        ]
      },
      testimonials: {
        title: 'Co Mówią Nasi Klienci',
        reviews: [
          'Fantastyczna obsługa! Mój samochód działa płynniej i szybciej.',
          'Gorąco polecam ich usługi tuningowe.',
          'Profesjonalnie i niezawodnie. Świetne wyniki!'
        ]
      },
      contact: {
        title: 'Skontaktuj się z nami',
        form: {
          name: 'Imię',
          email: 'Email',
          message: 'Wiadomość',
          submit: 'Wyślij'
        },
        details: {
          address: '123 Tuning St, Car City, CA',
          phone: '+1 234 567 890',
          email: 'info@cartuning.com'
        }
      },
      footer: {
        follow: 'Śledź nas',
        info: '© 2023 Car Tuning. Wszelkie prawa zastrzeżone.'
      }
    }
  };

  const langContent = content[language];

  return (
    <div className="font-sans">
      <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <div className="flex space-x-4">
          {langContent.nav.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className="hover:underline">
              {item}
            </a>
          ))}
        </div>
        <button onClick={toggleLanguage} className="bg-gray-700 px-4 py-2 rounded">
          {language === 'en' ? 'PL' : 'EN'}
        </button>
      </nav>

      <header className="text-center py-20 bg-gray-900 text-white">
        <h1 className="text-5xl font-bold">{langContent.hero.headline}</h1>
        <p className="text-xl mt-4">{langContent.hero.subheadline}</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full">
          {langContent.hero.cta}
        </button>
      </header>

      <section id="services" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">{langContent.services.title}</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {langContent.services.items.map((service, index) => (
            <div key={index} className="bg-white p-6 m-4 rounded shadow-md w-64">
              {service}
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">{langContent.testimonials.title}</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {langContent.testimonials.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-6 m-4 rounded shadow-md w-64">
              {review}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">{langContent.contact.title}</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder={langContent.contact.form.name} className="w-full p-3 mb-4 border rounded" />
          <input type="email" placeholder={langContent.contact.form.email} className="w-full p-3 mb-4 border rounded" />
          <textarea placeholder={langContent.contact.form.message} className="w-full p-3 mb-4 border rounded"></textarea>
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded">
            {langContent.contact.form.submit}
          </button>
        </form>
        <div className="mt-10">
          <p>{langContent.contact.details.address}</p>
          <p>{langContent.contact.details.phone}</p>
          <p>{langContent.contact.details.email}</p>
        </div>
      </section>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-gray-400"><FaFacebook size="24" /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram size="24" /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter size="24" /></a>
        </div>
        <p>{langContent.footer.follow}</p>
        <p className="mt-4">{langContent.footer.info}</p>
      </footer>
    </div>
  );
};

export default Index;