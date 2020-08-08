const getHtml = (name) => document.querySelector(name);

// nav
const header = getHtml("#header");

// banner
const secondaryBanner = getHtml("#bannerBgAddition");
const banner = getHtml("#bannerBg");

const introTimeline = gsap.timeline();

// content
const pageTitles = document.querySelectorAll(".line span");
const contentText = getHtml('.content-inner p');
const contentButton = getHtml('.content-inner .btn-row')
const playVideo = getHtml(".play-video span");
const playVideoCover = getHtml(".play-video .cover");

introTimeline
  .from([secondaryBanner, banner], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .from(header, {
    delay: -0.5,
    opacity: 0,
    y: 16,
    duration: 0.8,
    ease: "power3.inOut",
  })
  .from(pageTitles, {
    delay: -0.4,
    y: 80,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  }).from([contentText, contentButton], {
      delay: -0.6,
      y:-40,
      duration:.8,
      opacity:0,
      ease: "power3.out",
      stagger:.2,
  }).to([playVideo,playVideoCover], {
      delay:-.6,
      opacity:1,
      duration:0,
  }).to(playVideoCover, {
      delay:-.5,
      height:0,
      duration: 1,
      ease: "power3.out"
  })


//   Home page hand image 
const image = getHtml('.image-inner img')
const featureBanner = getHtml('#featureBanner')
const featureBannerGreen = getHtml('#featureBannerGreen')
gsap.from(image, {
    delay: 2.2,
    x: -100,
    skewX: 2,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out"
  });
  
  gsap.from([featureBanner, featureBannerGreen], {
    delay: 2.4,
    x: -60,
    skewX: 6,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  });


  // features section

  const featuresTitle = getHtml('.features-content h3')
  const featuresDesc = getHtml('.features-content p')
  const featuresBtn = getHtml('.features-content .btn-row')
  const featuresList = document.querySelectorAll('.features-list li')

  const featuresTimeline = gsap.timeline()

  featuresTimeline.from([featuresTitle, featuresDesc, featuresBtn], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    }
  }).from(featuresList, {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.4
    }
  });

  // scroll magic

  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({
    triggerElement: "#featureBannerGreen",
    triggerHook: 0,
    reverse: false // if true it will reset the animation if we scroll back up
  })
    // .addIndicators()
    .setTween(featuresTimeline)
    .addTo(controller);
  