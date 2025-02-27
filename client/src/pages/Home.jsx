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
    image: "https://cdn.pixabay.com/photo/2024/02/15/16/40/teacher-8575733_640.png"
  },
  {
    name: "Ankit Choubey",
    review: "I love the community here. Everyone is so supportive, and I've never felt better!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQPREvPprCnFOjFEO-j9-3P1xM-ipMus1hQ&s"
  },
  {
    name: "John Doe",
    review: "The best decision I made was joining this GYM. The results speak for themselves!",
    image: "https://cdn.pixabay.com/photo/2021/01/04/06/19/woman-5886559_1280.jpg"
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
      <div className="py-16 bg-gradient-to-r from-rose-100 to-teal-100">
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
          <h2 className="text-4xl font-bold text-center mb-8">What Our Members Say</h2>
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
          <h2 className="text-4xl font-bold text-center mb-8">Latest News</h2>
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