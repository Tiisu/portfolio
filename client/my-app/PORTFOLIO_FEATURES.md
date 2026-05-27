# Portfolio Features & Animations

## 🎨 Design
- **Clean White Background**: Professional, minimalist aesthetic
- **High Contrast Typography**: Bold, modern sans-serif fonts
- **Gradient Accents**: Subtle gradients for visual interest
- **Responsive Design**: Fully responsive across all devices

## ✨ GSAP Animations

### Hero Section
- **Text Reveal**: Title lines slide up with stagger effect (1.2s duration)
- **Subtitle Fade**: Smooth fade-in with upward motion (delay: 0.8s)
- **Button Entrance**: Buttons fade in from bottom (delay: 1.2s)
- **Profile Image**: Scale and fade animation (1.5s duration)

### Scroll-Triggered Animations
- **Section Reveals**: Sections fade in and slide up when scrolling (80% viewport trigger)
- **Project Cards**: Staggered entrance with 0.1s delay between cards
- **Process Items**: Slide in from left with sequential delays
- **Skills Cards**: Scale animation with bounce effect (back.out easing)
- **Contact Section**: Scale and fade reveal

### Hover Effects
- **Project Cards**: 
  - Scale up to 102%
  - Gradient overlay fade-in
  - Border color change
  - Shadow enhancement
  
- **Buttons**:
  - Scale to 105%
  - Arrow translation
  - Background color transition
  
- **Skill Cards**:
  - Border color change
  - Shadow enhancement

## 🚀 Performance
- **GSAP ScrollTrigger**: Efficient scroll-based animations
- **Hardware Acceleration**: CSS transforms for 60fps animations
- **Optimized Easing**: Power3/Power4 easing for smooth motion
- **Context Cleanup**: Proper GSAP context management

## 📦 Dependencies
- **GSAP**: Professional-grade animation library
- **ScrollTrigger**: Scroll-based animation plugin
- **Next.js 16**: React framework
- **Tailwind CSS**: Utility-first CSS framework

## 🎯 Animation Timing
- Hero animations: 0s - 1.5s
- Scroll animations trigger at 80-85% viewport
- Stagger delays: 0.1s - 0.2s between elements
- Hover transitions: 300-500ms

## 🔧 Customization
All animation parameters can be adjusted in the `useEffect` hook:
- Duration
- Delay
- Easing functions
- Trigger points
- Stagger timing
