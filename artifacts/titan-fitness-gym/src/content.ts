export const gymContent = {
  business: {
    name: 'Titan Fitness Gym',
    descriptor: 'Leading fitness destination',
    positioning: 'Expert trainers. Endurance training.',
    address: 'Shop No M1, Yousuf Grand Square, Teen Talwar, Khayaban-e-Iqbal Rd, Block 8 Clifton, Karachi, 75600',
    phone: '0331 2072217',
    whatsapp: 'https://wa.me/923312072217?text=Hi%20Titan%20Fitness%20Gym%2C%20I%27d%20like%20to%20ask%20about%20membership%20and%20a%20trial%20visit.',
    hours: [
      ['Monday – Friday', '8:00 AM – 12:00 AM'],
      ['Saturday', '8:00 AM – 10:00 PM'],
      ['Sunday', 'Closed'],
    ],
    ratings: { google: '4.7', reviews: '107 Google reviews', facebook: '1.8K+', instagram: '1.4K+' },
  },
  programs: [
    { number: '01', title: 'Personal training', label: 'ONE / ONE', copy: 'A plan that bends to your body, your schedule, and the outcome you are chasing.', accent: 'lime', points: ['Individual programming', 'Form-first coaching', 'Progress checkpoints'] },
    { number: '02', title: 'Group / ground training', label: 'THE FLOOR', copy: 'Show up together. Work hard together. Leave with a crew that keeps you accountable.', accent: 'coral', points: ['For men and women', 'Conditioning circuits', 'Motivating atmosphere'] },
    { number: '03', title: 'Weight loss', label: 'LEANER / STRONGER', copy: 'Make the daily work count with smart endurance training and coaches who keep it real.', accent: 'lime', points: ['Sustainable routines', 'Endurance focus', 'Nutrition guidance'] },
    { number: '04', title: 'Muscle building', label: 'BUILD / DEFINE', copy: 'Turn intent into strength. Build muscle with disciplined volume and knowledgeable staff.', accent: 'coral', points: ['Hypertrophy plans', 'Strength progression', 'Bodybuilding support'] },
  ],
  trainers: [
    { name: 'Coach Adeel', role: 'Strength & conditioning', initials: 'AA', note: 'Confirmation placeholder — trainer profile to be confirmed.' },
    { name: 'Coach Hira', role: 'Weight loss & endurance', initials: 'HC', note: 'Confirmation placeholder — trainer profile to be confirmed.' },
    { name: 'Coach Bilal', role: 'Muscle building', initials: 'BC', note: 'Confirmation placeholder — trainer profile to be confirmed.' },
  ],
  pricing: [
    { title: 'Open gym', detail: 'Independent training floor access', price: 'PKR —', note: 'Confirm current rate' },
    { title: 'Personal training', detail: 'Coaching and custom programming', price: 'PKR —', note: 'Confirm current rate' },
    { title: 'Group training', detail: 'Ground work and guided sessions', price: 'PKR —', note: 'Confirm current rate' },
  ],
  testimonials: [
    { quote: 'A clean, well-equipped place where the staff actually make you want to keep coming back.', source: 'Google review theme' },
    { quote: 'The trainers are friendly, knowledgeable, and serious about helping you get stronger.', source: 'Google review theme' },
    { quote: 'The atmosphere is motivating without feeling intimidating — a real Clifton training home.', source: 'Google review theme' },
  ],
  gallery: [
    { src: '/titan-hero.jpg', alt: 'Athlete training in Titan gym', span: 'tall' },
    { src: 'https://images.pexels.com/photos/4164516/pexels-photo-4164516.jpeg?auto=compress&cs=tinysrgb&w=1100', alt: 'Strength training detail', span: 'wide' },
    { src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Training floor', span: 'square' },
    { src: 'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Focused athlete', span: 'square' },
  ],
} as const;

export type Program = (typeof gymContent.programs)[number];