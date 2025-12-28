
// Import the required type for WELLNESS_CONTENT
import { WellnessCard } from './types';

export const HERO_PHRASES = [
  "Healthier Living, Naturally",
  "Longevity Through Better Habits",
  "Wellness for a Longer, Better Life",
];

// Expanded WELLNESS_CONTENT to include more diverse and in-depth guides
export const WELLNESS_CONTENT: WellnessCard[] = [
  {
    id: 1,
    title: "The Science of Sleep",
    description: "Discover how deep restorative sleep acts as the ultimate cognitive and biological reset.",
    content: "Deep sleep is not merely a period of inactivity. It is a highly active state where your brain flushes out toxins, consolidates memories, and repairs cellular damage. Optimizing your circadian rhythm through consistent sleep-wake cycles, reducing blue light exposure before bed, and maintaining a cool environment can dramatically improve your longevity and daily cognitive performance.",
    image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?auto=format&fit=crop&q=80&w=800",
    category: "Rest"
  },
  {
    id: 2,
    title: "Nutritional Density",
    description: "Moving beyond calories to understand the micronutrients that fuel your longevity.",
    content: "True health isn't just about counting calories; it's about the quality of those calories. Focusing on a diet rich in polyphenols, antioxidants, and omega-3 fatty acids helps combat chronic inflammation—the silent driver of aging. Incorporate a wide variety of colorful vegetables, fermented foods for gut health, and clean protein sources to provide your body with the building blocks it needs for repair.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "Mindful Movement",
    description: "Why functional strength and mobility are the true markers of a youthful body.",
    content: "Traditional exercise often focuses on aesthetics, but functional movement focuses on life. Maintaining muscle mass (sarcopenia prevention) and joint mobility are critical as we age. A combination of resistance training, flexibility work (like Yoga or Pilates), and steady-state zone 2 cardio creates a resilient cardiovascular system and a robust musculoskeletal frame.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    category: "Activity"
  },
  {
    id: 4,
    title: "Cognitive Resilience",
    description: "Strategies to keep your brain sharp and neuroplastic at any age.",
    content: "Neuroplasticity is the brain's ability to form new neural connections. Engaging in lifelong learning, meditation, and complex problem-solving helps maintain this plasticity. Reducing stress through mindfulness practices also protects the hippocampus from the damaging effects of chronic cortisol, preserving memory and executive function.",
    image: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=800",
    category: "Mind"
  },
  {
    id: 5,
    title: "The Breathwork Path",
    description: "Harnessing the power of oxygen to regulate your nervous system.",
    content: "Most people are 'shallow breathers,' which keeps the body in a state of low-level stress. Techniques like box breathing, 4-7-8 breathing, or Tummo can shift the body from a sympathetic (fight-or-flight) to a parasympathetic (rest-and-digest) state in minutes. Master your breath to master your physiology.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    category: "Biohacking"
  },
  {
    id: 6,
    title: "Hydration Logic",
    description: "It's not just about water; it's about cellular electrolyte balance.",
    content: "Proper hydration is essential for every enzymatic reaction in the body. However, drinking pure water can sometimes flush out essential minerals. Ensuring a proper balance of sodium, potassium, and magnesium allows for optimal electrical signaling in the brain and muscles. Drink filtered water and consider mineral supplementation based on your activity levels.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800",
    category: "Essential"
  },
  {
    id: 7,
    title: "Gut-Brain Optimization",
    description: "Exploring the vast microbial universe within and its impact on mental clarity.",
    content: "The gut-brain axis is a bidirectional communication network between your enteric and central nervous systems. By cultivating a diverse microbiome through prebiotic fibers and fermented foods, you can influence neurotransmitter production, reduce systemic inflammation, and enhance mood stability and cognitive function.",
    image: "https://images.unsplash.com/photo-1616671285410-6a9787e91d8e?auto=format&fit=crop&q=80&w=800",
    category: "Nutrition"
  },
  {
    id: 8,
    title: "Heat Shock Response",
    description: "How regular sauna use activates protective proteins to slow down aging.",
    content: "Exposure to high temperatures triggers the expression of Heat Shock Proteins (HSPs). These proteins act as 'molecular chaperones,' ensuring that other cellular proteins are folded correctly and repairing those that are damaged. Regular sauna use has been linked to improved cardiovascular health and a significantly lower risk of neurodegenerative diseases.",
    image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&q=80&w=800",
    category: "Biohacking"
  },
  {
    id: 9,
    title: "The Cold Exposure Ritual",
    description: "Strengthening the nervous system and boosting dopamine through the cold.",
    content: "Deliberate Cold Exposure (DCE), such as cold plunges or showers, triggers a robust release of norepinephrine and dopamine, lasting for hours. This controlled stressor strengthens the autonomic nervous system, improves metabolic rate by activating brown adipose tissue, and enhances mental resilience against everyday stressors.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
    category: "Biohacking"
  },
  {
    id: 10,
    title: "Nature Recalibration",
    description: "Why Nature Immersion is a physiological necessity in our digital age.",
    content: "Spending time in natural environments, often called 'Forest Bathing,' significantly lowers cortisol levels and blood pressure. The exposure to phytoncides—organic compounds released by trees—boosts the activity of natural killer (NK) cells, strengthening your immune system's ability to combat infections and tumors.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    category: "Mind"
  },
  {
    id: 11,
    title: "Metabolic Flexibility",
    description: "Mastering the switch between burning glucose and fats for sustained energy.",
    content: "Metabolic flexibility is the body's ability to efficiently alternate between fuel sources. Through strategic intermittent fasting and low-glycemic eating, you can train your mitochondria to burn fat more effectively. This reduces insulin resistance, stabilizes energy levels throughout the day, and supports long-term cellular health.",
    image: "https://images.unsplash.com/photo-1466632347070-9645430277bc?auto=format&fit=crop&q=80&w=800",
    category: "Essential"
  },
  {
    id: 12,
    title: "Autophagy and Renewal",
    description: "Understanding your body's natural cellular recycling and repair system.",
    content: "Autophagy is the 'self-eating' process where cells recycle damaged components. Triggered primarily by nutrient deprivation (fasting) or high-intensity exercise, autophagy clears out cellular junk that contributes to aging and disease. Optimizing these cycles ensures that your cellular machinery remains lean, clean, and efficient.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    category: "Biohacking"
  }
];
