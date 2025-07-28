// Add interactive effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});

// Add animation to CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter', () => {
  ctaButton.style.transform = 'scale(1.05)';
});

ctaButton.addEventListener('mouseleave', () => {
  ctaButton.style.transform = 'scale(1)';
});


