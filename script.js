const modal = document.getElementById('video-modal');
const trailerFrame = document.getElementById('trailer-frame');
const closeModal = () => {
  modal.hidden = true;
  trailerFrame.src = '';
};

document.querySelectorAll('[data-trailer]').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    trailerFrame.src = project.dataset.trailer;
    modal.hidden = false;
  });
});

modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.querySelector('.modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });

const visitationModal = document.getElementById('visitation-modal');
const visitationTrailerFrame = document.getElementById('visitation-trailer-frame');
const closeVisitationModal = () => {
  visitationModal.hidden = true;
  visitationTrailerFrame.src = '';
};
document.querySelectorAll('[data-visitation-trailer]').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    visitationTrailerFrame.src = project.dataset.visitationTrailer;
    visitationModal.hidden = false;
  });
});
visitationModal.addEventListener('click', (event) => { if (event.target === visitationModal) closeVisitationModal(); });
visitationModal.querySelector('.modal-close').addEventListener('click', closeVisitationModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !visitationModal.hidden) closeVisitationModal(); });

const eyeModal = document.getElementById('eye-modal');
const closeEyeModal = () => { eyeModal.hidden = true; };
document.querySelectorAll('[data-eye-detail]').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    eyeModal.hidden = false;
  });
});
eyeModal.addEventListener('click', (event) => { if (event.target === eyeModal) closeEyeModal(); });
eyeModal.querySelector('.modal-close').addEventListener('click', closeEyeModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !eyeModal.hidden && document.getElementById('eye-lightbox').hidden) closeEyeModal(); });

const eyePreviewItems = Array.from(document.querySelectorAll('.eye-preview-item'));
const eyeLightbox = document.getElementById('eye-lightbox');
const eyeLightboxImage = document.getElementById('eye-lightbox-image');
let eyePreviewIndex = 0;
const showEyePreview = (index) => {
  eyePreviewIndex = (index + eyePreviewItems.length) % eyePreviewItems.length;
  const image = eyePreviewItems[eyePreviewIndex].querySelector('img');
  eyeLightboxImage.src = image.src;
  eyeLightboxImage.alt = image.alt;
  eyeLightbox.hidden = false;
};
const closeEyeLightbox = () => {
  eyeLightbox.hidden = true;
  eyeLightboxImage.src = '';
};
eyePreviewItems.forEach((item, index) => item.addEventListener('click', () => showEyePreview(index)));
eyeLightbox.querySelector('.lightbox-close').addEventListener('click', closeEyeLightbox);
eyeLightbox.querySelector('.lightbox-prev').addEventListener('click', () => showEyePreview(eyePreviewIndex - 1));
eyeLightbox.querySelector('.lightbox-next').addEventListener('click', () => showEyePreview(eyePreviewIndex + 1));
eyeLightbox.addEventListener('click', (event) => { if (event.target === eyeLightbox) closeEyeLightbox(); });
document.addEventListener('keydown', (event) => {
  if (eyeLightbox.hidden) return;
  if (event.key === 'Escape') closeEyeLightbox();
  if (event.key === 'ArrowLeft') showEyePreview(eyePreviewIndex - 1);
  if (event.key === 'ArrowRight') showEyePreview(eyePreviewIndex + 1);
});

const bloodySlushieModal = document.getElementById('bloody-slushie-modal');
const closeBloodySlushieModal = () => { bloodySlushieModal.hidden = true; };
document.querySelectorAll('[data-bloody-slushie-detail]').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    bloodySlushieModal.hidden = false;
  });
});
bloodySlushieModal.addEventListener('click', (event) => { if (event.target === bloodySlushieModal) closeBloodySlushieModal(); });
bloodySlushieModal.querySelector('.modal-close').addEventListener('click', closeBloodySlushieModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !bloodySlushieModal.hidden && document.getElementById('bloody-slushie-lightbox').hidden) closeBloodySlushieModal(); });

const bloodySlushiePreviewItems = Array.from(document.querySelectorAll('.bloody-slushie-preview-item'));
const bloodySlushieLightbox = document.getElementById('bloody-slushie-lightbox');
const bloodySlushieLightboxImage = document.getElementById('bloody-slushie-lightbox-image');
let bloodySlushiePreviewIndex = 0;
const showBloodySlushiePreview = (index) => {
  bloodySlushiePreviewIndex = (index + bloodySlushiePreviewItems.length) % bloodySlushiePreviewItems.length;
  const image = bloodySlushiePreviewItems[bloodySlushiePreviewIndex].querySelector('img');
  bloodySlushieLightboxImage.src = image.src;
  bloodySlushieLightboxImage.alt = image.alt;
  bloodySlushieLightbox.hidden = false;
};
const closeBloodySlushieLightbox = () => {
  bloodySlushieLightbox.hidden = true;
  bloodySlushieLightboxImage.src = '';
};
bloodySlushiePreviewItems.forEach((item, index) => item.addEventListener('click', () => showBloodySlushiePreview(index)));
bloodySlushieLightbox.querySelector('.lightbox-close').addEventListener('click', closeBloodySlushieLightbox);
bloodySlushieLightbox.querySelector('.lightbox-prev').addEventListener('click', () => showBloodySlushiePreview(bloodySlushiePreviewIndex - 1));
bloodySlushieLightbox.querySelector('.lightbox-next').addEventListener('click', () => showBloodySlushiePreview(bloodySlushiePreviewIndex + 1));
bloodySlushieLightbox.addEventListener('click', (event) => { if (event.target === bloodySlushieLightbox) closeBloodySlushieLightbox(); });
document.addEventListener('keydown', (event) => {
  if (bloodySlushieLightbox.hidden) return;
  if (event.key === 'Escape') closeBloodySlushieLightbox();
  if (event.key === 'ArrowLeft') showBloodySlushiePreview(bloodySlushiePreviewIndex - 1);
  if (event.key === 'ArrowRight') showBloodySlushiePreview(bloodySlushiePreviewIndex + 1);
});

const snailModal = document.getElementById('snail-modal');
const closeSnailModal = () => { snailModal.hidden = true; };
document.querySelectorAll('[data-snail-detail]').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    snailModal.hidden = false;
  });
});
snailModal.addEventListener('click', (event) => { if (event.target === snailModal) closeSnailModal(); });
snailModal.querySelector('.modal-close').addEventListener('click', closeSnailModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !snailModal.hidden && document.getElementById('snail-lightbox').hidden) closeSnailModal(); });

const snailPreviewItems = Array.from(document.querySelectorAll('.snail-preview-item'));
const snailLightbox = document.getElementById('snail-lightbox');
const snailLightboxImage = document.getElementById('snail-lightbox-image');
let snailPreviewIndex = 0;
const showSnailPreview = (index) => {
  snailPreviewIndex = (index + snailPreviewItems.length) % snailPreviewItems.length;
  const image = snailPreviewItems[snailPreviewIndex].querySelector('img');
  snailLightboxImage.src = image.src;
  snailLightboxImage.alt = image.alt;
  snailLightbox.hidden = false;
};
const closeSnailLightbox = () => {
  snailLightbox.hidden = true;
  snailLightboxImage.src = '';
};
snailPreviewItems.forEach((item, index) => item.addEventListener('click', () => showSnailPreview(index)));
snailLightbox.querySelector('.lightbox-close').addEventListener('click', closeSnailLightbox);
snailLightbox.querySelector('.lightbox-prev').addEventListener('click', () => showSnailPreview(snailPreviewIndex - 1));
snailLightbox.querySelector('.lightbox-next').addEventListener('click', () => showSnailPreview(snailPreviewIndex + 1));
snailLightbox.addEventListener('click', (event) => { if (event.target === snailLightbox) closeSnailLightbox(); });
document.addEventListener('keydown', (event) => {
  if (snailLightbox.hidden) return;
  if (event.key === 'Escape') closeSnailLightbox();
  if (event.key === 'ArrowLeft') showSnailPreview(snailPreviewIndex - 1);
  if (event.key === 'ArrowRight') showSnailPreview(snailPreviewIndex + 1);
});

const misunderstandingModal = document.getElementById('misunderstanding-modal');
const closeMisunderstandingModal = () => { misunderstandingModal.hidden = true; };
document.querySelectorAll('[data-misunderstanding-detail]').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    misunderstandingModal.hidden = false;
  });
});
misunderstandingModal.addEventListener('click', (event) => { if (event.target === misunderstandingModal) closeMisunderstandingModal(); });
misunderstandingModal.querySelector('.modal-close').addEventListener('click', closeMisunderstandingModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !misunderstandingModal.hidden && document.getElementById('misunderstanding-lightbox').hidden) closeMisunderstandingModal(); });

const misunderstandingPreviewItems = Array.from(document.querySelectorAll('.misunderstanding-preview-item'));
const misunderstandingLightbox = document.getElementById('misunderstanding-lightbox');
const misunderstandingLightboxImage = document.getElementById('misunderstanding-lightbox-image');
let misunderstandingPreviewIndex = 0;
const showMisunderstandingPreview = (index) => {
  misunderstandingPreviewIndex = (index + misunderstandingPreviewItems.length) % misunderstandingPreviewItems.length;
  const image = misunderstandingPreviewItems[misunderstandingPreviewIndex].querySelector('img');
  misunderstandingLightboxImage.src = image.src;
  misunderstandingLightboxImage.alt = image.alt;
  misunderstandingLightbox.hidden = false;
};
const closeMisunderstandingLightbox = () => {
  misunderstandingLightbox.hidden = true;
  misunderstandingLightboxImage.src = '';
};
misunderstandingPreviewItems.forEach((item, index) => item.addEventListener('click', () => showMisunderstandingPreview(index)));
misunderstandingLightbox.querySelector('.lightbox-close').addEventListener('click', closeMisunderstandingLightbox);
misunderstandingLightbox.querySelector('.lightbox-prev').addEventListener('click', () => showMisunderstandingPreview(misunderstandingPreviewIndex - 1));
misunderstandingLightbox.querySelector('.lightbox-next').addEventListener('click', () => showMisunderstandingPreview(misunderstandingPreviewIndex + 1));
misunderstandingLightbox.addEventListener('click', (event) => { if (event.target === misunderstandingLightbox) closeMisunderstandingLightbox(); });
document.addEventListener('keydown', (event) => {
  if (misunderstandingLightbox.hidden) return;
  if (event.key === 'Escape') closeMisunderstandingLightbox();
  if (event.key === 'ArrowLeft') showMisunderstandingPreview(misunderstandingPreviewIndex - 1);
  if (event.key === 'ArrowRight') showMisunderstandingPreview(misunderstandingPreviewIndex + 1);
});

const socialBanishedModal = document.getElementById('social-banished-modal');
const closeSocialBanishedModal = () => { socialBanishedModal.hidden = true; };
document.querySelectorAll('[data-social-banished-detail]').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    socialBanishedModal.hidden = false;
  });
});
socialBanishedModal.addEventListener('click', (event) => { if (event.target === socialBanishedModal) closeSocialBanishedModal(); });
socialBanishedModal.querySelector('.modal-close').addEventListener('click', closeSocialBanishedModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !socialBanishedModal.hidden && document.getElementById('social-banished-lightbox').hidden) closeSocialBanishedModal(); });

const socialBanishedPreviewItems = Array.from(document.querySelectorAll('.social-banished-preview-item'));
const socialBanishedLightbox = document.getElementById('social-banished-lightbox');
const socialBanishedLightboxImage = document.getElementById('social-banished-lightbox-image');
let socialBanishedPreviewIndex = 0;
const showSocialBanishedPreview = (index) => {
  socialBanishedPreviewIndex = (index + socialBanishedPreviewItems.length) % socialBanishedPreviewItems.length;
  const image = socialBanishedPreviewItems[socialBanishedPreviewIndex].querySelector('img');
  socialBanishedLightboxImage.src = image.src;
  socialBanishedLightboxImage.alt = image.alt;
  socialBanishedLightbox.hidden = false;
};
const closeSocialBanishedLightbox = () => {
  socialBanishedLightbox.hidden = true;
  socialBanishedLightboxImage.src = '';
};
socialBanishedPreviewItems.forEach((item, index) => item.addEventListener('click', () => showSocialBanishedPreview(index)));
socialBanishedLightbox.querySelector('.lightbox-close').addEventListener('click', closeSocialBanishedLightbox);
socialBanishedLightbox.querySelector('.lightbox-prev').addEventListener('click', () => showSocialBanishedPreview(socialBanishedPreviewIndex - 1));
socialBanishedLightbox.querySelector('.lightbox-next').addEventListener('click', () => showSocialBanishedPreview(socialBanishedPreviewIndex + 1));
socialBanishedLightbox.addEventListener('click', (event) => { if (event.target === socialBanishedLightbox) closeSocialBanishedLightbox(); });
document.addEventListener('keydown', (event) => {
  if (socialBanishedLightbox.hidden) return;
  if (event.key === 'Escape') closeSocialBanishedLightbox();
  if (event.key === 'ArrowLeft') showSocialBanishedPreview(socialBanishedPreviewIndex - 1);
  if (event.key === 'ArrowRight') showSocialBanishedPreview(socialBanishedPreviewIndex + 1);
});

const youtopiaModal = document.getElementById('youtopia-modal');
const closeYoutopiaModal = () => { youtopiaModal.hidden = true; };
document.querySelectorAll('[data-youtopia-detail]').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    youtopiaModal.hidden = false;
  });
});
youtopiaModal.addEventListener('click', (event) => { if (event.target === youtopiaModal) closeYoutopiaModal(); });
youtopiaModal.querySelector('.modal-close').addEventListener('click', closeYoutopiaModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !youtopiaModal.hidden) closeYoutopiaModal(); });

const workLinks = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
const workGrid = document.querySelector('.work-grid');
const siteFooter = document.querySelector('footer');
const detailLinks = document.querySelectorAll('[data-section]');
const categoryLinks = document.querySelectorAll('nav a');
const setActiveCategory = (activeLink) => {
  categoryLinks.forEach((link) => link.classList.toggle('is-active', link === activeLink));
};

detailLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    setActiveCategory(link);
    const selectedSection = document.getElementById(link.dataset.section);
    detailLinks.forEach((otherLink) => {
      document.getElementById(otherLink.dataset.section).hidden = otherLink !== link;
    });
    workGrid.hidden = true;
    siteFooter.hidden = true;
    selectedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

workLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const category = link.dataset.filter;
    if (!category) return;
    event.preventDefault();
    setActiveCategory(link.matches('nav a') ? link : null);
    workGrid.hidden = false;
    siteFooter.hidden = category !== 'all';
    detailLinks.forEach((detailLink) => {
      document.getElementById(detailLink.dataset.section).hidden = true;
    });
    projects.forEach((project) => {
      project.hidden = category !== 'all' && project.dataset.category !== category;
    });
    document.querySelector('.work-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
