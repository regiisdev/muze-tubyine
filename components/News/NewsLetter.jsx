import { useState } from 'react';
import Line from '../../assets/hr.png';

const NewsletterSubscription = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // You can add an API call here to handle the subscription
    setFormData({ fullName: '', email: '' });
  };

  return (
    <div className="bg-gray-100 py-16 flex justify-center items-center">
      <div className="max-w-6xl w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-4">
            {/* Replace src with your actual image path */}
            <img src={Line}
             alt="Line" className="h-1 mr-3 w-3 " />
            <h3 className="uppercase text-primary text-lg font-bold ">Newsletter</h3>
          </div>
          <h2 className="text-4xl font-bold text-black mb-2 ">
            Subscribe to our newsletter
          </h2>
          <p className="text-secondary ">
            Never miss an update, subscribe to our e-mail newsletter.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John doe"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
