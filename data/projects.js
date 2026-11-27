/*
 * PORTFOLIO DATA: edit this file to add or change projects. No rebuild is needed.
 * (If you run the site from the dist/ folder, edit dist/data/projects.js; if you use `npm run dev`, edit public/data/projects.js.)
 *
 * All file paths are relative to the site root, for example "projects/tableholic/videos/my-video.mp4".
 *
 * MEDIA ITEM
 *   type:        "image" | "video"
 *   src:         path to the image, or to the .mp4 for a video
 *   thumb:       (image, optional) smaller version used in grids; src opens in the lightbox
 *   poster:      (video) still image shown before playback
 *   w, h:        natural width and height in pixels (keeps the layout stable)
 *   title, caption, alt: text shown under the item / used for accessibility
 *   duration:    (video, optional) for example "0:37"
 *   groups:      list of group ids from the section's `groups`, used for the tabs
 *   placeholder: true  -> shows a clearly labelled placeholder tile instead of real work
 *                (give it `label`, `hint` and `aspect`, for example "4/5")
 *
 * To add real work: replace a placeholder item with an image or video item, or add a new item to `media`.
 * Set site.showPlaceholders to false before publishing to hide every placeholder tile.
 */
window.PORTFOLIO = {
  site: {
    showPlaceholders: true,
    profileImage: 'profile/profile-image/nguyen-thanh-nhan.webp',
    // Three visuals shown in the hero. `project` links to a case study.
    hero: [
      { src: 'projects/tableholic/videos/infinity-vs-infinity-plus-poster.webp', w: 720, h: 1280, alt: 'Still from a Tableholic chair comparison video: a presenter between a red and a blue ergonomic chair under the title Two chairs.', tag: 'Video editing', project: 'tableholic' },
      { src: 'projects/tableholic/posters/flyer-01-lite-frame-thumb.webp', w: 520, h: 736, alt: 'Tableholic LITE Frame promotional flyer showing a standing desk and ergonomic chair.', tag: 'Graphic design', project: 'tableholic' },
      { src: 'projects/diffspecialty/videos/weekend-shift-skit-poster.webp', w: 1000, h: 564, alt: 'Still from a Diffspecialty short video: two people talking in front of the cafe wall.', tag: 'Short-form video', project: 'diffspecialty' },
    ],
  },

  // Filter buttons in "Selected works". A project appears under every filter id listed in its `filters`.
  filters: [
    { id: 'video-editing', label: 'Video editing' },
    { id: 'content-creation', label: 'Content creation' },
    { id: 'filming-production', label: 'Filming & production' },
    { id: 'graphic-design', label: 'Graphic design' },
  ],

  projects: [
    /* ------------------------------------------------------------------ TABLEHOLIC */
    {
      slug: 'tableholic',
      name: 'TABLEHOLIC',
      featured: true,
      label: 'Featured project',
      industry: 'Ergonomic Products / Furniture',
      summary: 'Content planning, on-site filming, video editing and graphic design for a Singapore ergonomic furniture brand.',
      description: [
        'Contributed to TABLEHOLIC’s creative content production, taking part in multiple stages of the workflow, from content planning and on-site filming to graphic design and video post-production.',
        'Focused on producing engaging short-form videos and visual materials that showcase product features, communicate brand messages, and support social media marketing.',
      ],
      emphasis: 'Involved in multiple stages of the creative process, from content planning and filming to final editing and graphic design.',
      responsibilities: ['Content Creation & Planning', 'Video Filming & Production', 'Graphic Design', 'Video Editing & Post-production'],
      projectTypes: ['TikTok Videos', 'Instagram Reels', 'Product Commercial Videos', 'Talking Head Videos', 'Product Reviews', 'Product Showcases', 'Promotional Posters', 'Marketing Graphics'],
      filters: ['video-editing', 'content-creation', 'filming-production', 'graphic-design'],
      // Images used on the home page card and at the top of the case study.
      thumbnails: [
        { src: 'projects/tableholic/posters/year-end-mega-sales-story-thumb.webp', w: 520, h: 924, alt: 'Tableholic Year End Mega Sales 2026 story poster.' },
        { src: 'projects/tableholic/videos/infinity-vs-infinity-plus-poster.webp', w: 720, h: 1280, alt: 'Still from a Tableholic chair comparison video.' },
        { src: 'projects/tableholic/videos/concept-7-phone-call-skit-poster.webp', w: 720, h: 1280, alt: 'Still from a Tableholic phone-call skit video.' },
      ],
      sections: [
        {
          id: 'creative-direction',
          title: 'Content & creative direction',
          intro: 'How ideas are shaped before the camera starts rolling.',
          notes: [
            { title: 'Content planning', text: 'Planning short-form content for TikTok and Instagram Reels: what the video says, how it opens and what needs to be filmed on site.' },
            { title: 'Video concepts', text: 'Concepts range from a POV phone-call skit about enquiring for an ergonomic desk to a three-round chair comparison that ends with a verdict.' },
            { title: 'Product storytelling', text: 'Features are explained through contrast and demonstration, such as colour options and added comfort, then closed with a clear invitation to visit the showroom.' },
            { title: 'Social media content ideas', text: 'A mix of skits, product demos, talking-head explainers and showroom introductions keeps the channel varied.' },
          ],
          layout: 'grid',
          media: [
            { type: 'image', placeholder: true, label: 'Content plan or calendar screenshot', hint: 'Add to public/projects/tableholic/images/', aspect: '4/3' },
            { type: 'image', placeholder: true, label: 'Storyboard or script page', hint: 'Add to public/projects/tableholic/images/', aspect: '4/3' },
          ],
        },
        {
          id: 'filming-production',
          title: 'Filming & production',
          intro: 'On-site filming and production work for Tableholic content.',
          layout: 'grid',
          media: [
            { type: 'image', placeholder: true, label: 'Behind-the-scenes photo', hint: 'Add to public/projects/tableholic/behind-the-scenes/', aspect: '4/5' },
            { type: 'image', placeholder: true, label: 'Filming example', hint: 'Add to public/projects/tableholic/behind-the-scenes/', aspect: '4/5' },
            { type: 'image', placeholder: true, label: 'Production image', hint: 'Add to public/projects/tableholic/behind-the-scenes/', aspect: '4/5' },
          ],
        },
        {
          id: 'video-editing',
          title: 'Video editing',
          intro: 'Short-form and product videos, organised by type.',
          layout: 'videos',
          groups: [
            { id: 'tiktok-reels', label: 'TikTok & Reels' },
            { id: 'product-commercials', label: 'Product commercials' },
            { id: 'talking-head', label: 'Talking head videos' },
            { id: 'product-reviews', label: 'Product reviews' },
          ],
          media: [
            {
              type: 'video', src: 'projects/tableholic/videos/concept-7-phone-call-skit.mp4', poster: 'projects/tableholic/videos/concept-7-phone-call-skit-poster.webp',
              w: 720, h: 1280, duration: '0:37', title: 'Phone-call skit (Concept 7)', caption: 'POV skit for TikTok and Instagram Reels.', groups: ['tiktok-reels'],
            },
            {
              type: 'video', src: 'projects/tableholic/videos/infinity-vs-infinity-plus.mp4', poster: 'projects/tableholic/videos/infinity-vs-infinity-plus-poster.webp',
              w: 720, h: 1280, duration: '0:55', title: 'Infinity vs Infinity Plus', caption: 'Three-round chair comparison with on-screen graphics, a verdict and a showroom call to action.', groups: ['product-reviews', 'talking-head'],
            },
            {
              type: 'video', src: 'projects/tableholic/videos/year-end-mega-sales.mp4', poster: 'projects/tableholic/videos/year-end-mega-sales-poster.webp',
              w: 432, h: 768, duration: '0:23', title: 'Year-end mega sales', caption: 'Short promotional video for the Year End Mega Sales campaign.', groups: ['tiktok-reels'],
            },
            {
              type: 'video', src: 'projects/tableholic/videos/l-desk-product-showcase.mp4', poster: 'projects/tableholic/videos/l-desk-product-showcase-poster.webp',
              w: 432, h: 768, duration: '1:00', title: 'L-Desk product showcase', caption: 'Product showcase with on-screen graphics and the year-end offer.', groups: ['product-commercials'],
            },
            {
              type: 'video', src: 'projects/tableholic/videos/three-checks-chair-review.mp4', poster: 'projects/tableholic/videos/three-checks-chair-review-poster.webp',
              w: 432, h: 768, duration: '0:59', title: 'Three checks for choosing a chair', caption: 'Presenter-led comparison of two chair models with checklist graphics.', groups: ['product-reviews', 'talking-head'],
            },
            {
              type: 'video', src: 'projects/tableholic/videos/work-smarter-talking-head.mp4', poster: 'projects/tableholic/videos/work-smarter-talking-head-poster.webp',
              w: 432, h: 768, duration: '0:42', title: 'Work smarter with Tableholic', caption: 'Talking-head video with subtitles and a branded end card.', groups: ['talking-head'],
            },
          ],
          aside: { src: 'projects/tableholic/images/instagram-feed.webp', w: 720, h: 941, alt: 'Screenshot of the Tableholic Instagram feed showing a grid of Reels thumbnails.', caption: 'Screenshot of the Tableholic Instagram feed.' },
        },
        {
          id: 'graphic-design',
          title: 'Graphic design',
          intro: 'Promotional posters, product flyers and social media designs.',
          layout: 'masonry',
          groups: [
            { id: 'promotional-posters', label: 'Promotional posters' },
            { id: 'marketing-graphics', label: 'Marketing graphics' },
            { id: 'product-visuals', label: 'Product visuals' },
            { id: 'social-media-designs', label: 'Social media designs' },
          ],
          media: [
            { type: 'image', src: 'projects/tableholic/posters/year-end-mega-sales-story.webp', thumb: 'projects/tableholic/posters/year-end-mega-sales-story-thumb.webp', w: 1080, h: 1920, title: 'Year-end sale story poster', caption: 'Vertical 9:16 promotion for social media stories.', alt: 'Tableholic Year End Mega Sales 2026 poster for a dual motor standing desk, with showroom address and QR code.', groups: ['social-media-designs', 'promotional-posters'] },
            { type: 'image', src: 'projects/tableholic/posters/flyer-01-lite-frame.webp', thumb: 'projects/tableholic/posters/flyer-01-lite-frame-thumb.webp', w: 1100, h: 1556, title: 'LITE Frame promotion flyer', caption: 'Promotional flyer for a trade-show offer.', alt: 'Flyer titled LITE Frame with a standing desk, an ergonomic chair and offer details.', groups: ['promotional-posters'] },
            { type: 'image', src: 'projects/tableholic/posters/flyer-02-e-desk.webp', thumb: 'projects/tableholic/posters/flyer-02-e-desk-thumb.webp', w: 1100, h: 1556, title: 'E-DESK product flyer', caption: 'Specs, sizes and warranty in one page.', alt: 'Flyer for the E-DESK electric dual-motor height-adjustable desk with specifications and sizes.', groups: ['product-visuals'] },
            { type: 'image', src: 'projects/tableholic/posters/flyer-03-l-desk.webp', thumb: 'projects/tableholic/posters/flyer-03-l-desk-thumb.webp', w: 1100, h: 1556, title: 'L-DESK product flyer', caption: 'L-shaped desk with specs and sizes.', alt: 'Flyer for the L-DESK electric dual-motor L-shaped desk with specifications and sizes.', groups: ['product-visuals'] },
            { type: 'image', src: 'projects/tableholic/posters/flyer-04-choose-your-desk.webp', thumb: 'projects/tableholic/posters/flyer-04-choose-your-desk-thumb.webp', w: 1100, h: 1556, title: 'Desk selection guide', caption: 'Compares models and tabletops step by step.', alt: 'Flyer titled Choose Your Desk comparing desk models and tabletop options.', groups: ['marketing-graphics'] },
            { type: 'image', src: 'projects/tableholic/posters/flyer-05-accessories.webp', thumb: 'projects/tableholic/posters/flyer-05-accessories-thumb.webp', w: 1100, h: 1556, title: 'Accessories flyer', caption: 'Accessory range laid out as a clean product grid.', alt: 'Flyer titled Choose your accessories showing nine desk accessories.', groups: ['marketing-graphics', 'product-visuals'] },
            { type: 'image', src: 'projects/tableholic/posters/flyer-06-monitor-arm.webp', thumb: 'projects/tableholic/posters/flyer-06-monitor-arm-thumb.webp', w: 1100, h: 1556, title: 'Monitor arm flyer', caption: 'Product grid with offer pricing.', alt: 'Flyer titled Monitor Arm showing eight monitor arms and a foldable standing desk.', groups: ['marketing-graphics', 'product-visuals'] },
            { type: 'image', src: 'projects/tableholic/posters/flyer-07-infinity-chair.webp', thumb: 'projects/tableholic/posters/flyer-07-infinity-chair-thumb.webp', w: 1100, h: 1556, title: 'INFINITY chair flyer', caption: 'Chair features, colours and customer feedback.', alt: 'Flyer for the INFINITY ergonomic chair with features, mesh colours and customer reviews.', groups: ['product-visuals'] },
            { type: 'image', src: 'projects/tableholic/posters/flyer-08-evolution-x-chair.webp', thumb: 'projects/tableholic/posters/flyer-08-evolution-x-chair-thumb.webp', w: 1100, h: 1556, title: 'EVOLUTION X chair flyer', caption: 'Feature callouts around the product photo.', alt: 'Flyer for the EVOLUTION X ergonomic chair with feature callouts.', groups: ['product-visuals'] },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------------ DIFFSPECIALTY */
    {
      slug: 'diffspecialty',
      name: 'DIFFSPECIALTY',
      featured: false,
      label: 'Brand & visual content project',
      industry: 'Specialty Coffee / Food & Beverage',
      summary: 'Graphic design and video editing for a specialty coffee brand’s visual identity and social media presence.',
      description: [
        'Contributed to DIFFSPECIALTY’s visual communication through graphic design and video editing, creating promotional materials and digital content to support the brand’s visual identity and social media presence.',
      ],
      emphasis: '',
      responsibilities: ['Graphic Design', 'Poster & Flyer Design', 'Social Media Graphics', 'Video Editing'],
      projectTypes: ['Promotional Posters', 'Marketing Flyers', 'Social Media Visuals', 'Short-form Video Editing'],
      filters: ['video-editing', 'graphic-design'],
      thumbnails: [
        { src: 'projects/diffspecialty/videos/weekend-shift-skit-poster.webp', w: 1000, h: 564, alt: 'Still from a Diffspecialty short video: two people talking in front of the cafe wall.' },
        { src: 'projects/diffspecialty/images/instagram-feed.webp', w: 720, h: 875, alt: 'Screenshot of the Diffspecialty Instagram feed.' },
      ],
      sections: [
        {
          id: 'graphic-design',
          title: 'Graphic design',
          intro: 'Promotional posters, flyers and social media graphics.',
          layout: 'grid',
          media: [
            {
              type: 'image', src: 'projects/diffspecialty/posters/silaturrahning-x-diff.webp', thumb: 'projects/diffspecialty/posters/silaturrahning-x-diff-thumb.webp',
              w: 1100, h: 1343, title: 'Silaturrahning x DIFF poster', caption: 'Event poster with the date, time and cafe address.',
              alt: 'Black-and-white event poster for Silaturrahning x DIFF with a blurred runner, the event title, date, time and cafe address.',
            },
            { type: 'image', placeholder: true, label: 'Flyer design', hint: 'Add to public/projects/diffspecialty/flyers/', aspect: '4/5' },
            { type: 'image', placeholder: true, label: 'Marketing material', hint: 'Add to public/projects/diffspecialty/images/', aspect: '4/5' },
            { type: 'image', placeholder: true, label: 'Social media graphic', hint: 'Add to public/projects/diffspecialty/images/', aspect: '4/5' },
          ],
          aside: { src: 'projects/diffspecialty/images/instagram-feed.webp', w: 720, h: 875, alt: 'Screenshot of the Diffspecialty Instagram feed showing posters, photos and videos.', caption: 'Screenshot of the Diffspecialty Instagram feed.' },
        },
        {
          id: 'video-editing',
          title: 'Video editing',
          intro: 'Short-form videos and brand content for social media.',
          layout: 'videos',
          groups: [
            { id: 'short-form', label: 'Short-form videos' },
            { id: 'brand-promo', label: 'Brand promotional videos' },
            { id: 'social-video', label: 'Social media video content' },
          ],
          media: [
            { type: 'video', src: 'projects/diffspecialty/videos/weekend-shift-skit.mp4', poster: 'projects/diffspecialty/videos/weekend-shift-skit-poster.webp', w: 1000, h: 564, duration: '0:19', title: 'Weekend shift skit', caption: 'Light-hearted short video for social media.', groups: ['short-form', 'social-video'] },
            { type: 'video', src: 'projects/diffspecialty/videos/siphon-brewing.mp4', poster: 'projects/diffspecialty/videos/siphon-brewing-poster.webp', w: 1000, h: 564, duration: '0:07', title: 'Siphon brewing', caption: 'Close-up brewing sequence for the cafe.', groups: ['short-form', 'brand-promo'] },
            {
              type: 'video', src: 'projects/diffspecialty/videos/opening-day-announcement.mp4', poster: 'projects/diffspecialty/videos/opening-day-announcement-poster.webp',
              w: 432, h: 768, duration: '0:13', title: 'We’re open tomorrow', caption: 'Announcement video from the bar, presented to camera.', groups: ['social-video', 'short-form'],
            },
            {
              type: 'video', src: 'projects/diffspecialty/videos/bar-takeover-countdown.mp4', poster: 'projects/diffspecialty/videos/bar-takeover-countdown-poster.webp',
              w: 432, h: 768, duration: '0:22', title: 'Bar takeover countdown', caption: 'Countdown reminder for an upcoming bar takeover.', groups: ['brand-promo', 'social-video'],
            },
            {
              type: 'video', src: 'projects/diffspecialty/videos/good-coffee-brewed-properly.mp4', poster: 'projects/diffspecialty/videos/good-coffee-brewed-properly-poster.webp',
              w: 432, h: 768, duration: '0:07', title: 'Good coffee, brewed properly', caption: 'Close-up iced latte pour with branded cups.', groups: ['brand-promo', 'short-form'],
            },
            {
              type: 'video', src: 'projects/diffspecialty/videos/trio-in-theory-duo-in-practice.mp4', poster: 'projects/diffspecialty/videos/trio-in-theory-duo-in-practice-poster.webp',
              w: 432, h: 768, duration: '0:16', title: 'Trio in theory, duo in practice', caption: 'Light-hearted team video with on-screen text.', groups: ['short-form', 'social-video'],
            },
            {
              type: 'video', src: 'projects/diffspecialty/videos/oat-cold-brew.mp4', poster: 'projects/diffspecialty/videos/oat-cold-brew-poster.webp',
              w: 432, h: 768, duration: '0:13', title: 'Oat cold brew', caption: 'Product video on a clean white set.', groups: ['brand-promo'],
            },
          ],
        },
      ],
    },
  ],
};
