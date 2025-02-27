import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import Faqs from '../components/Faqs';
import { FaDumbbell, FaHeartbeat, FaUsers, FaAward } from 'react-icons/fa'; // Icons for features
import TestimonialCard from '../components/TestimonialCard'; // Assume you have a testimonial card component
import CallToAction from '../components/CallToAction';

const testimonialData = [
  {
    name: "Akshay Tripathi",
    review: "MH FITNESS has transformed my life! The trainers are amazing, and the facilities are top-notch.",
    image: "https://scontent.fdel76-1.fna.fbcdn.net/v/t39.30808-6/427994825_18301447375145837_8579348345335995894_n.jpg?stp=dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=onWGUSDAj6MQ7kNvgGshONg&_nc_oc=AdicUyzDnih2Wz00T2-Nr5FmYjG0JZJklO0bgsngDFenpIMwh1ZGbgZR6U5BNFk7vHk&_nc_zt=23&se=-1&_nc_ht=scontent.fdel76-1.fna&_nc_gid=A6q0GACDEzWr4tkeyUmmjPJ&oh=00_AYASQ1dbqT0H1bte1bK8WQPCdvEug8mlgj0VJVAcgK0z9A&oe=67C65B4E"
  },
  {
    name: "Ankit Choubey",
    review: "I love the community here. Everyone is so supportive, and I've never felt better!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQPREvPprCnFOjFEO-j9-3P1xM-ipMus1hQ&s"
  },
  {
    name: "Kishan Singh",
    review: "The best decision I made was joining this GYM. The results speak for themselves!",
    image: "https://scontent.fdel76-1.fna.fbcdn.net/v/t39.30808-6/466347333_2566749020198218_5484022231164465339_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=e4RdzmWbBdEQ7kNvgHhLjfT&_nc_oc=Adg8qKVQ-LYMkz7nNBsxCopEIpV_eBhfJOddbqzftAji36YQhPQZN7twINrHcBgxgQk&_nc_zt=23&_nc_ht=scontent.fdel76-1.fna&_nc_gid=AxeZXueIti4RHeVGT971Smz&oh=00_AYB664HWCzctMBX1DfgM9FynhbmXjSrznyZsh_CZR22tkg&oe=67C65DF5"
  },
];

const featureData = [
  {
    id: 1,
    icon: FaDumbbell,
    title: "Modern Equipment",
    description: "We provide the latest fitness equipment to help you achieve your goals.",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Expert Trainers",
    description: "Our certified trainers are here to guide and motivate you.",
  },
  {
    id: 3,
    icon: FaHeartbeat,
    title: "Health Focused",
    description: "We prioritize your health and well-being in every program.",
  },
  {
    id: 4,
    icon: FaAward,
    title: "Award-Winning",
    description: "Recognized as the best gym in the region for 3 years in a row.",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <div className="pt-4 pb-16 bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1: State-of-the-Art Equipment */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <FaDumbbell className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Modern Equipment</h3>
              <p className="text-zinc-700">We provide the latest fitness equipment to help you achieve your goals.</p>
            </div>

            {/* Feature 2: Expert Trainers */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <FaUsers className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-zinc-700">Our certified trainers are here to guide and motivate you.</p>
            </div>

            {/* Feature 3: Health & Wellness */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <FaHeartbeat className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Health Focused</h3>
              <p className="text-zinc-700">We prioritize your health and well-being in every program.</p>
            </div>

            {/* Feature 4: Award-Winning */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <FaAward className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Award-Winning</h3>
              <p className="text-zinc-700">Recognized as the best gym in the region for 3 years in a row.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">What Our Members Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonials */}
            {
              testimonialData.map((testimonial, index) => (
                <TestimonialCard name={testimonial.name} review={testimonial.review} image={testimonial.image} />
              ))
            }
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <CallToAction/>

      {/* Blog/News Section (Optional) */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_640.jpg" // Replace with actual image URL
                alt="Blog Post 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">5 Tips for Staying Fit in 2024</h3>
                <p className="text-zinc-700 mb-4">Discover the best strategies to maintain your fitness goals this year.</p>
                <a href="#" className="text-teal-500 font-semibold hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/16/09/46/female-2646996_640.jpg" // Replace with actual image URL
                alt="Blog Post 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">The Benefits of Group Workouts</h3>
                <p className="text-zinc-700 mb-4">Learn why group workouts can boost your motivation and results.</p>
                <a href="#" className="text-teal-500 font-semibold hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2016/02/20/21/41/vegetables-1212845_640.jpg" // Replace with actual image URL
                alt="Blog Post 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Nutrition Tips for Gym Enthusiasts</h3>
                <p className="text-zinc-700 mb-4">Fuel your workouts with the right nutrition plan.</p>
                <a href="#" className="text-teal-500 font-semibold hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Faqs />
    </div>
  );
};

export default Home;