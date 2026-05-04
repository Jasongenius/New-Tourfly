import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        brandName: 'TOURFLY AI',
        solutions: 'Solutions',
        templates: 'Templates',
        wechat: 'Mini Program',
        gallery: 'Gallery',
        pricing: 'Pricing',
        faq: 'FAQ',
        about: 'About',
        getStarted: 'Sign In',
      },
      hero: {
        badge: 'Enterprise AI Visual Solution',
        title1: 'Tourfly AI',
        title2: 'Commercial Visual Engine',
        subtitle: 'The next-generation AI content productivity for e-commerce, brands, and manufacturing. Generate professional product shots, model campaigns, and print designs in 30 seconds.',
        ctaStart: 'Get Started',
        ctaSubtitle: 'Enterprise Grade Production',
        ctaShowcase: 'Watch Demo',
        promptPlaceholder: 'Describe your visual vision...',
      },
      stats: {
        images: '3,800,000+',
        imagesLabel: 'Commercial Visual Assets',
        clients: '500+',
        clientsLabel: 'Enterprise Clients',
        speed: '30s',
        speedLabel: 'From Idea to Visual',
        cost: '70%',
        costLabel: 'Cost Reduction',
      },
      industries: {
        title: 'Industries We Empower',
        ecommerce: {
          title: 'E-commerce Sellers',
          desc: 'Main Shots / Detail Pages / Scene Generation'
        },
        fashion: {
          title: 'Fashion Brands',
          desc: 'Print Design / Development / Model Shoots'
        },
        factory: {
          title: 'Designers',
          desc: 'Portfolios / Creative Concepts / Mood Boards'
        },
        agency: {
          title: 'Ad Agencies',
          desc: 'Campaign KV / Posters / Video Assets'
        },
        media: {
          title: 'Content Creators',
          desc: 'Covers / Viral Visual Identity'
        },
        enterprise: {
          title: 'Enterprise Clients',
          desc: 'Private Deployment / Robust API Access'
        }
      },
      impact: {
        title: 'Visual Impact',
        subtitle: 'See the transformation from raw capture to studio-quality commercial asset.',
        beforeLabel: 'Original Image',
        afterLabel: 'AI Effect',
      },
      solutions: {
        hero: {
          title: 'Tourfly AI, Visual Solution Platform',
          subtitle: 'Empowering industries with cutting-edge AI image generation and workflow automation.',
          title2: 'AI-Powered Creativity',
          subtitle2: 'Unlock infinite possibilities with our advanced visual engine.',
          title3: 'Enterprise Grade',
          subtitle3: 'Secure, scalable, and built for professional production teams.',
          cta: 'Start Now',
          watchDemo: 'Watch Demo',
          learnMore: 'Learn Technical Details',
        },
        modules: {
          creation: {
            title: 'Intelligent Creation',
            desc: 'Powerful text-to-image and image-to-image engines with a professional unified canvas for creative editing.',
          },
          workflow: {
            title: 'Professional Workflows',
            desc: 'Multi-model fusion pipelines including SDXL, FLUX, and specialized e-commerce/apparel automation.',
          },
          tools: {
            title: 'AI Design Toolset',
            desc: 'Advanced tools for ControlNet precision, AI color separation, smart recoloring, and 4K upscaling.',
          },
          training: {
            title: 'Model Customization',
            desc: 'Custom Dreambooth and LoRA training to maintain brand consistency and product fidelity.',
          },
          enterprise: {
            title: 'Private & API Services',
            desc: 'Secure private deployment and robust API integration for enterprise-scale visual production.',
          },
          hardware: {
            title: 'AI Integrated Hardware',
            desc: 'Deploy Tourfly AI locally on desktop-grade computing units, transforming into your internal "AI Assistant" solution.',
          },
          learnMore: 'Learn More',
        },
        scenarios: {
          ecommerce: {
            title: 'E-commerce Visual Solutions',
            intro: 'Upload product photos and instantly generate:',
            items: [
              'Amazon main images',
              'Little Red Book lifestyle shots',
              'Scenario-based visuals',
              'Holiday promotion banners'
            ],
            footer: 'Helping sellers boost CTR and conversion rates.',
            features: ['Automated Clipping', 'Scene Generation', 'Lighting optimization', '4K Export'],
          },
          fashion: {
            title: 'Fashion Design Solutions',
            intro: 'Generate in 30 seconds:',
            items: [
              'Pattern Prints',
              'Garment Renders',
              'Model Street Shots',
              'Marketing Visuals'
            ],
            metrics: [
              '10x Launch Speed',
              '70% Sampling Cost Reduction'
            ],
            footerText: 'Empowering brands to achieve:',
            features: ['Model Swap', 'Design Preservation', 'Virtual Try-on', 'Batch Generation'],
          },
          textile: {
            title: 'Home Textile Visual Solutions',
            intro: 'Input patterns and generate with one click:',
            items: [
              'Bedding Set Visuals',
              'Bedroom Scene Renders',
              'Overseas Platform Content',
              'Seasonal Collection Visuals'
            ],
            features: ['Material Simulation', 'Seamless Tiling', 'Color Separation', 'Multi-view Preview'],
          },
          pod: {
            title: 'POD Flexible Supply Chain',
            intro: 'Input patterns and generate instantly:',
            items: [
              'T-shirt Listing Images',
              'Bag Print Visuals',
              'Custom Home Decor',
              'Global E-commerce Assets'
            ],
            metrics: [
              'Fast Order Processing',
              'No-inventory Verification',
              'Small-batch Fast Response'
            ],
            footerText: 'Supporting:',
          },
          bags: {
            title: 'Bags & Footwear Visual Solutions',
            intro: 'Upload white mold images or product photos, generate with one click:',
            items: [
              'Bag Listing Images',
              'Footwear Colorway Images',
              'High-end Advertising Images',
              'Model Outfit Matches',
              'E-commerce Detail Shots'
            ],
            metrics: [
              'Fast Launching',
              'Reduce Photography Costs',
              'Improve New Product Testing Efficiency'
            ],
            footerText: 'Helping brands achieve:',
          },
          jewelry: {
            title: 'Jewelry & Accessories Solutions',
            intro: 'Upload product photos and instantly generate:',
            items: [
              'High-end Still Life Images',
              'Model Wearing Shoots',
              'Gift Box Advertisements',
              'Holiday Marketing Visuals',
              'E-commerce Detail Shots'
            ],
            footer: 'Helping brands improve luxury appeal and premium value.',
          },
          beauty: {
            title: 'Beauty & Personal Care Solutions',
            intro: 'Upload product photos and generate with one click:',
            items: [
              'Skincare Advertisements',
              'Ingredient Visualizations',
              'Lifestyle Content Shoots',
              'Social Media Promos',
              'Holiday Marketing KVs'
            ],
            footer: 'Helping brands consistently output high-frequency content.',
          },
          marketing: {
            title: 'Brand Marketing Content Solutions',
            intro: 'Generate fast:',
            items: [
              'Campaign KV',
              'Social Media Posters',
              'Event Key Visuals',
              'Store Promotional Images',
              'Video Storyboard Frames'
            ],
            footer: 'Helping brands realize low-cost, high-frequency dissemination.',
          },
          enterprise: {
            title: 'Enterprise Private Deployment Solutions',
            intro: 'Providing enterprises with:',
            items: [
              'Private Model Deployment',
              'API Integration',
              'Multi-account Collaboration',
              'Batch Production Workflow',
              'Data Security Management'
            ],
            footer: 'Suitable for: Brand Groups / Factories / Platforms',
          },
          art: {
            title: 'Digital Art',
            desc: 'Creative tools for illustrators and concept artists to accelerate their creative process.',
            features: ['Style Transfer', 'Sketch to Art', 'Infinite Canvas'],
          },
        },
        enterprise: {
          badge: 'Enterprise Solution',
          title: 'Enterprise & Team Plan',
          desc: 'Scalable solutions for high-volume production teams.',
          features: ['Batch Generation', 'API Access', 'Custom Workflows', 'Team Management'],
          cta: 'Contact Sales',
        },
      },
      comparison: {
        title1: 'Production',
        title2: 'Efficiency',
        subtitle: 'Comparing traditional studio costs vs. Tourfly AI efficiency.',
        badge: 'Competitive Edge',
        mainTitle1: 'Traditional Studio',
        mainTitle2: 'Tourfly AI',
        cost: 'High Cost ($$$$)',
        costAI: 'Low Cost ($)',
        time: 'Weeks to Months',
        timeAI: 'Hours to Days',
        iteration: 'Expensive Retakes',
        iterationAI: 'Infinite Real-time Versions',
        quote: 'Standard production is limited by physical constraints. Tourfly is limited only by imagination.',
      },
      pricing: {
        title1: 'Computing Power',
        title2: 'Solutions',
        subtitle: 'Choose the recharge plan that fits your production volume.',
        mostPopular: 'Most Popular',
        perMonth: '',
        creditsLabel: 'Credits',
        imagesLabel: 'Approx. Images',
        standard: {
          name: 'Standard',
          price: '¥1,999.00',
          credits: '10,000',
          images: '2,000',
          desc: 'Essential for individual creators.',
          cta: 'Recharge Now',
          features: [
            'Massive Reference Gallery',
            'Exclusive VIP 5*8 Support'
          ],
        },
        flagship: {
          name: 'Flagship',
          price: '¥4,999.00',
          credits: '41,500',
          images: '8,300',
          desc: 'For professional production teams.',
          cta: 'Recharge Now',
          features: [
            'Custom Scene Templates',
            'Massive Reference Gallery',
            'Exclusive VIP 5*8 Support'
          ],
        },
        enterprise: {
          name: 'Enterprise',
          price: '¥20,000.00',
          credits: '200,000',
          images: '40,000',
          desc: 'High-volume commercial solution.',
          cta: 'Talk to Sales',
          features: [
            'Custom Scene Templates',
            'Massive Reference Gallery',
            'Enterprise Admin Dashboard',
            'Exclusive VIP 5*8 Support',
            'Custom Exclusive Model Image',
            'Unlimited Text-to-Image'
          ],
        },
        custom: {
          name: 'Custom',
          price: '¥50,000.00',
          credits: '625,000',
          images: '125,000',
          desc: 'Tailored for large-scale operations.',
          cta: 'Contact Us',
          features: [
            'Custom Scene Templates',
            'Massive Reference Gallery',
            'Enterprise Admin Dashboard',
            'Exclusive VIP 7*12 Support',
            'Custom Exclusive Model Image',
            'Unlimited Text-to-Image',
            'Unlimited Style LoRA Models'
          ],
        },
      },
      comparisonTable: {
        title: 'Why Professionals Choose Tourfly AI',
        subtitle: 'Comparing capabilities across the landscape',
        col1: 'Capability',
        col2: 'General AI',
        col3: 'Tourfly AI',
        exclusive: 'Exclusive',
        row1: { name: 'Product Detail Stability', v1: 'Weak', v2: 'Strong' },
        row2: { name: 'E-commerce Vision Understanding', v1: 'Normal', v2: 'Strong' },
        row3: { name: 'Fixed Character Generation', v1: 'Weak', v2: 'Lifelike' },
        row4: { name: 'Batch Production Ability', v1: 'Limited', v2: 'Strong' },
        row5: { name: 'Print & Pattern Design', v1: 'Basic', v2: 'Professional' },
        row6: { name: 'Enterprise Private Deployment', v1: 'Little support', v2: 'Full support' },
        row7: { name: 'Personalized Enterprise Service', v1: 'None', v2: 'Support' },
      },
      gallery: {
        title1: 'Inspiration',
        title2: 'Library',
        subtitle: 'Explore high-fidelity visual assets generated by the Tourfly community.',
        credits: 'Credits',
        remix: 'Remix this Style',
        remixTitle: 'Remix Vision',
        originalPrompt: 'Original Prompt',
        remixDesc: 'Remixing uses 1 credit to generate a new variation of this style based on your current preferences.',
        btnConfirm: 'Confirm Remix',
        btnRemixing: 'Generating...',
        btnCancel: 'Cancel',
        errorTitle: 'Insufficient Credits',
        errorLink: 'Upgrade to continue remixing',
      },
      cta: {
        title: 'Ready to Transform Your Way of Working?',
        subtitle: 'Join the industry leaders already using Tourfly AI to accelerate their production.',
        primary: 'Start Now',
        secondary: 'Watch Product Demo',
      },
      mobile: {
        title: 'Tourfly AI Mobile Platform',
        subtitle: 'Professional AI Visual Production in the palm of your hand',
        manifesto: [
          'Full-scene AI visual processing matrix covering the entire commercial photography process.',
          'Hot cases shortcut: One-click restore common application scene parameters.',
          'AI Video Workflow: Componentized orchestration of AI video generation.',
          'Complete team collaboration, credit pool management, and partner distribution system.'
        ],
        modules: {
          creation: {
            title: 'Creation Engine',
            items: [
              { name: 'Multi-image Fusion', desc: 'Creative combination of models, accessories, and backgrounds.' },
              { name: 'Model Outfit Swap', desc: 'Swap clothes with realistic fabric simulation.' },
              { name: 'Model Face Swap', desc: 'Consistent facial replacement with 4K skin texture.' },
              { name: 'Product BG Swap', desc: 'Studio-level background optimization for products.' }
            ]
          },
          management: {
            title: 'Asset & Data',
            items: [
              { name: 'Enterprise Management', desc: 'Team member permissions and credit pool allocation.' },
              { name: 'Creation Library', desc: 'Unified management of all generated commercial assets.' },
              { name: 'Partner System', desc: 'Full-cycle marketing and distribution management.' }
            ]
          },
          enterprise: {
            title: 'SaaS Platform',
            items: [
              { name: 'Multi-tenant BI', desc: 'Business intelligence and multi-dimensional data insights.' },
              { name: 'API Open Platform', desc: 'Scalable integration for existing enterprise systems.' },
              { name: 'Resource Pooling', desc: 'Unified scheduling of GPU computing clusters.' }
            ]
          }
        },
        cta: 'Scan to Enter Mini Program',
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you care about is here',
        desc: 'Comprehensive answers from capabilities to enterprise cooperation.',
        categories: {
          all: 'All',
          product: 'Product',
          pricing: 'Pricing',
          industry: 'Industry',
          enterprise: 'Enterprise',
          account: 'Account'
        },
        items: [
          { category: 'product', q: 'What can Tourfly AI do?', a: 'Tourfly AI focuses on intelligent generation of commercial visuals, including: Ecommerce main shots, product scenes, Amazon platform images, model street snaps, apparel design, print patterns, home textile displays, advertising posters, and batch SKU assets.' },
          { category: 'product', q: 'Difference from general AI drawing tools?', a: 'General tools focus on creative art; Tourfly AI focuses on commercial landing. We emphasize product consistency, commercial aesthetics, conversion-oriented design, industry templates, and enterprise-grade batch production.' },
          { category: 'product', q: 'Are the generated images realistic?', a: 'Yes, our models are specifically optimized for commercial photography. The results reach professional studio-level quality, ideal for ecommerce sales and brand marketing.' },
          { category: 'product', q: 'Can it preserve original product details?', a: 'Absolutely. We support high-precision retention of product structure, materials, colors, logos, and proportions—critical for bags, apparel, furniture, and jewelry.' },
          { category: 'product', q: 'How long to generate an image?', a: 'Usually around 30 seconds for a high-quality commercial image.' },
          { category: 'product', q: 'Support for Chinese operations?', a: 'Yes, full Chinese interface and input support with very low entry barrier.' },
          { category: 'pricing', q: 'How is it priced?', a: 'We offer flexible models including pay-as-you-go credits, monthly plans, annual plans, and enterprise editions.' },
          { category: 'pricing', q: 'Is there a free trial for new users?', a: 'Yes, register to receive trial credits and experience the core features for free.' },
          { category: 'pricing', q: 'What payment methods are supported?', a: 'We support WeChat Pay, Alipay, and major bank cards.' },
          { category: 'pricing', q: 'Will I be charged if generation fails?', a: 'Failed tasks usually result in credit refunds according to system rules.' },
          { category: 'industry', q: 'Which industries is it suitable for?', a: 'Ecommerce, fashion, home textile, jewelry, beauty, F&B, advertising agencies, and manufacturing factories.' },
          { category: 'industry', q: 'Suitable for Taobao, Tmall, Pinduoduo?', a: 'Very suitable. Supports main shots, detail page visuals, campaign images, and new arrival scenes.' },
          { category: 'industry', q: 'Suitable for Amazon, Shopify, Temu?', a: 'Supports cross-border visual requirements including white background shots and lifestyle scenes.' },
          { category: 'industry', q: 'Suitable for apparel industry?', a: 'Ideal for apparel brands to generate print patterns, model street snaps, and lookbooks.' },
          { category: 'industry', q: 'Suitable for home textile industry?', a: 'Supports rapid pattern generation and bedroom scene mapping.' },
          { category: 'enterprise', q: 'Does it support batch generation?', a: 'Yes, designed for high-frequency teams to generate assets for multiple SKUs and scenes in bulk.' },
          { category: 'enterprise', q: 'Support for multi-user collaboration?', a: 'Yes, supports enterprise accounts, permission management, and team collaboration.' },
          { category: 'enterprise', q: 'Support for API interfaces?', a: 'Yes, provides robust API interfaces for ERP and internal system integration.' },
          { category: 'enterprise', q: 'Support for private deployment?', a: 'We offer private deployment for brand clients with high data sensitivity.' },
          { category: 'enterprise', q: 'How to apply for enterprise cooperation?', a: 'Submit your requirements via the contact info at the bottom, and a consultant will reach out.' },
          { category: 'account', q: 'How to register an account?', a: 'Quick registration via phone or email, or experience via WeChat Mini Program.' },
          { category: 'account', q: 'What if I forget my password?', a: 'Reset via the "Forgot Password" function on the login page.' },
          { category: 'account', q: 'How to contact customer service?', a: 'Add customer service WeChat or consult via the online agent on the website.' },
          { category: 'account', q: 'Can generated images be used commercially?', a: 'Usually yes, provided you comply with platform rules. Refer to the usage agreement for details.' }
        ],
        stillHaveQuestions: {
          title: 'Still have questions?',
          desc: 'Feel free to contact our consultant team for the most suitable plan.',
          btns: {
            service: 'Contact Service',
            experience: 'Start for Free',
            demo: 'Watch Videos'
          }
        }
      },
      templates: {
        marketplace: 'Template Marketplace',
        title: 'AI Template Marketplace',
        subtitle: 'Upload products, instantly replicate commercial visual effects',
        categories: {
          all: 'All',
          ecommerce: 'E-commerce',
          model: 'Model Vision',
          ad: 'Product Ad',
          fashion: 'Fashion Design',
          textile: 'Pattern & Home',
          brand: 'Brand Planning',
          creative: 'Creative Design',
          batch: 'Batch Production',
        },
        labels: {
          suitableFor: 'Target User',
          effects: 'Core Ability',
          points: 'Points',
          batch: 'Batch Support',
          enterprise: 'Enterprise',
          conversion: 'High Conv',
          beginner: 'Beginner',
          hot: 'Hot'
        },
        items: {
          // Ecommerce
          main_shot_pro: { title: 'Main Shot Enhanced', suitable: 'Amazon/Tmall/Aliexpress Sellers', effects: ['4K HD Quality', 'Scene Lighting Sync', 'Boost CTR'], tags: ['High Conv', 'Hot'] },
          scene_display: { title: 'Product Scene Display', suitable: 'Social Media / E-com Sellers', effects: ['Atmospheric Rendering', 'Natural Shadows', 'Multi-scene Match'], tags: ['15 Points'] },
          high_ctr_shot: { title: 'High CTR Main Shot', suitable: 'Shopee / Lazada / TikTok Sellers', effects: ['Visual Focus Opt.', 'Dynamic Composition', 'Batch Export'], tags: ['Batch Support'] },
          detail_top_visual: { title: 'Detail Page Hero Visual', suitable: 'Premium Brands / Shopify', effects: ['Large Format Support', 'Detailed Texture', 'Emotional Lighting'], tags: ['Enterprise'] },
          amazon_template: { title: 'Amazon Main Template', suitable: 'FBA Sellers', effects: ['Compliant with Rules', 'Pure White Consistency', 'Sharp Details'], tags: ['Beginner'] },
          new_arrival: { title: 'New Arrival Visual', suitable: 'Fashion / Daily Goods Brands', effects: ['Fast Batch Listing', 'Seasonal Vibes', 'Unified Style'], tags: ['15 Points'] },
          high_value_product: { title: 'Luxury Product Visual', suitable: 'Watch / High-end Electronics', effects: ['Premium Material Feel', 'Refined Lighting', 'Macro Detail'], tags: ['Enterprise'] },
          cross_border_pro: { title: 'Cross-border Sell-all', suitable: 'Global Logistics Sellers', effects: ['Localized Aesthetics', 'Multi-angle Display', 'Cost Saving'], tags: ['Efficient'] },
          
          // Model
          model_face_pro: { title: 'Pro Model Face Swap', suitable: 'Clothing Brands / Agencies', effects: ['ID Consistency', '4K Facial Texture', 'Natural Expression'], tags: ['Enterprise', '15 Points'] },
          model_bg_pro: { title: 'Model Background Shift', suitable: 'Fashion Studios / Photographers', effects: ['Street/Studio Seamless', 'Lighting Integration', 'Fast Turnaround'], tags: ['Hot', 'Efficient'] },
          model_outfit: { title: 'Model Virtual Try-on', suitable: 'Online Boutiques', effects: ['Fabric Drape Realism', 'Pattern Precision', 'Style Match'], tags: ['15 Points'] },
          hand_fix: { title: 'Model Hand Repair Pro', suitable: 'AI Image Creators', effects: ['Anatomy Correction', 'Skin Texture Match', 'Seamless Blend'], tags: ['Beginner'] },
          model_prop: { title: 'Model Prop Interaction', suitable: 'Lifestyle Photography', effects: ['Natural Gripping', 'Shadow Interaction', 'Realistic Contact'], tags: ['Advanced'] },
          street_snap: { title: 'Real Street Snap', suitable: 'Streetwear Brands', effects: ['Urban Environment', 'Motion Blur Effects', 'Authentic Vibe'], tags: ['Hot'] },
          brand_model: { title: 'Brand Model Campaign', suitable: 'Global Fashion Houses', effects: ['Unified Visual DNA', 'High-end Style', 'Consistent Identity'], tags: ['Enterprise'] },
          batch_model: { title: 'Batch Model Output', suitable: 'Large Volume E-commerce', effects: ['Fast Multi-view', 'Consistency Control', 'Cloud Rendering'], tags: ['Batch Support'] },

          // Ad
          brand_ad_pro: { title: 'Brand Ad Campaign', suitable: 'Ad Agencies / Brands', effects: ['Cinematic Visual', 'Creative Composition', 'High Fidelity'], tags: ['Enterprise'] },
          premium_poster: { title: 'Premium Product Poster', suitable: 'Marketing Teams', effects: ['Typo-Visual Balance', 'Color Strategy', 'Impactful Layout'], tags: ['Hot'] },
          luxury_kv: { title: 'Luxury Product KV', suitable: 'Jewelry / Perfume Brands', effects: ['Sensory Lighting', 'Premium Material', 'Elegant Aesthetics'], tags: ['Luxury'] },
          cinematic_ad: { title: 'Movie-grade Ad Visual', suitable: 'Creative Directors', effects: ['Dramatic Lighting', 'Atmospheric Fog/Dust', 'Storytelling'], tags: ['Enterprise'] },
          launch_visual: { title: 'New Launch Visual', suitable: 'PR Teams / Startups', effects: ['Future-tech Vibes', 'Explosive Layout', 'Clean Presentation'], tags: ['New'] },
          still_life_ad: { title: 'Pro Still Life Ad', suitable: 'Table-top Photographers', effects: ['Macro Focus', 'Lighting Sculpting', 'Texture Detail'], tags: ['15 Points'] },
          social_promo: { title: 'Social Promo Visual', suitable: 'Social Media Managers', effects: ['1:1 / 9:16 Optimized', 'Viral Composition', 'Fast Iteration'], tags: ['Efficient'] },
          commercial_campaign: { title: 'Commercial Promo Pro', suitable: 'B2B / Retail Corp', effects: ['Uniform Visual Set', 'Multi-channel Ready', 'Clean Professional'], tags: ['Hot'] },

          // Fashion
          fashion_concept: { title: 'Fashion Design Concept', suitable: 'Independent Designers', effects: ['Avant-garde Style', 'Creative Silhouette', 'Draft to Result'], tags: ['Creative'] },
          fashion_moodboard: { title: 'Fashion Moodboard Pro', suitable: 'Creative Directors', effects: ['Inspiration Fusion', 'Unified Color Palette', 'High Consistency'], tags: ['Recommended'] },
          draft_to_garment: { title: 'Draft to Virtual Sample', suitable: 'Clothing Factories', effects: ['Precise Detail Mapping', 'Fabric Simulation', 'Production Ready'], tags: ['Efficient'] },
          garment_render: { title: 'Final Garment Render', suitable: 'E-commerce Listing', effects: ['Wrinkle Detail', 'Material Luster', '360° Realism'], tags: ['15 Points'] },
          fashion_plan: { title: 'Season Collection Plan', suitable: 'Merchandise Planners', effects: ['Style Variation', 'Colorway Expansion', 'Theme Consistency'], tags: ['Enterprise'] },
          men_fashion: { title: 'Men\'s Fashion Campaign', suitable: 'Menswear Brands', effects: ['Masculine Lighting', 'Texture Detail', 'Street/Office Vibes'], tags: ['Hot'] },
          women_apparel: { title: 'Women\'s New Launch', suitable: 'Womenwear Brands', effects: ['Elegant Lighting', 'Skin Smoothness', 'Vibrant Colors'], tags: ['High Conv'] },
          lookbook_pro: { title: 'Lookbook Display Pro', suitable: 'Apparel Brands', effects: ['Unified Studio Set', 'Clean Presentation', 'Sequence Batch'], tags: ['Batch Support'] },

          // Textile
          high_pattern: { title: 'Premium Pattern Design', suitable: 'Textile Designers', effects: ['Intricate Detail', 'Creative Graphics', 'Trend Matching'], tags: ['Creative', 'Hot'] },
          seamless_pattern: { title: 'Seamless Repeat Pattern', suitable: 'Factories / Print Shops', effects: ['Infinite Tiling', 'Precision Alignment', 'High Resolution'], tags: ['Efficient'] },
          paisley_template: { title: 'Paisley Pattern Design', suitable: 'Ethnic Wear Brands', effects: ['Heritage Reimagined', 'Complex Detailing', 'Color Variations'], tags: ['15 Points'] },
          western_trend: { title: 'Western Trend Motif', suitable: 'International Markets', effects: ['Modern Aesthetics', 'Geo-minimalism', 'Abstract Color'], tags: ['15 Points'] },
          oriental_pattern: { title: 'Oriental Pattern Art', suitable: 'Traditional Brands', effects: ['Ink & Wash Vibe', 'Traditional Symbolism', 'Modern Twist'], tags: ['15 Points'] },
          bedding_display: { title: 'Bedding Set Showcase', suitable: 'Home Textile Sellers', effects: ['Natural Drapery', 'Cozy Atmosphere', 'Realistic Scene'], tags: ['Hot'] },
          bedroom_scene: { title: 'Bedroom Smart Scene', suitable: 'Furniture Brands', effects: ['Interplay of Light', 'Warm Home Vibe', 'Material Precision'], tags: ['15 Points'] },
          multi_color_pattern: { title: 'Multi-color Extension', suitable: 'Design Studios', effects: ['Fast Color Recolor', 'Palette Optimization', 'Batch Preview'], tags: ['Batch Support'] },

          // Brand
          brand_vis_pro: { title: 'Brand VIS System Pro', suitable: 'Startups / Corporate', effects: ['Unified Visual ID', 'Asset Consistency', 'Professional Presence'], tags: ['Enterprise'] },
          brand_moodboard: { title: 'Brand Aesthetic Board', suitable: 'Creative Agencies', effects: ['Vibe Definition', 'Visual DNA Mapping', 'Cohesive Identity'], tags: ['Recommended'] },
          brand_proposal: { title: 'Brand visual Proposal', suitable: 'Agency pitched', effects: ['High-impact Imagery', 'Argument Visualization', 'Studio Grade'], tags: ['15 Points'] },
          brand_tonality: { title: 'Brand Essence Visual', suitable: 'Marketing Depts', effects: ['Emotional Resonance', 'Tonal Consistency', 'Unique Visual Voice'], tags: ['Hot'] },
          brand_website: { title: 'Brand Official Web Visual', suitable: 'Web Designers', effects: ['Large Screen Ready', 'UI/UX Visual Harmony', 'Tech-forward feel'], tags: ['15 Points'] },
          brand_story_ad: { title: 'Brand Story Poster', suitable: 'Campaign Managers', effects: ['Narrative Composition', 'Text-Image Balance', 'Memorable Visual'], tags: ['15 Points'] },
          global_brand_plan: { title: 'International Brand Visual', suitable: 'Global Brands', effects: ['Cross-cultural appeal', 'Minimalist aesthetics', 'Premium finish'], tags: ['Enterprise'] },
          brand_unity: { title: 'Brand Visual Unity', suitable: 'Operations Teams', effects: ['Asset Standardization', 'Consistent Colorways', 'Cross-platform sync'], tags: ['Batch Support'] },

          // Creative
          creative_gift: { title: 'Merch & Gift Design', suitable: 'IP Owners / Art Shops', effects: ['Product Application', 'Realistic Material', 'Creative Packaging'], tags: ['Creative'] },
          opc_display: { title: 'OPC Product Showcase', suitable: 'Industrial Designers', effects: ['Concept to Reality', 'Technical Detail', 'Showroom Preset'], tags: ['Advanced'] },
          pod_extension: { title: 'POD Category Expansion', suitable: 'Print-on-Demand Stores', effects: ['Multi-item Mapping', 'Fast Visualization', 'No-inventory Pre'], tags: ['Efficient'] },
          single_to_multi: { title: 'Single Image Multi-apply', suitable: 'E-commerce Managers', effects: ['Workflow Speed', 'Consistency across items', 'Asset leverage'], tags: ['Efficient'] },
          tshirt_display: { title: 'T-shirt Graphic Display', suitable: 'Apparel Startups', effects: ['Realistic Crease', 'Print Texture', 'Streetwear Vibe'], tags: ['Hot'] },
          canvas_bag: { title: 'Canvas Bag Print Visual', suitable: 'Designers / Gift Shops', effects: ['Natural Fabric Feel', 'Graphic Placement', 'Lifestyle Scene'], tags: ['15 Points'] },
          gift_series: { title: 'Gift Collection Series', suitable: 'Corporate Gifting', effects: ['Cohesive Visual Set', 'Premium Presentation', 'Unified Theme'], tags: ['Enterprise'] },
          ip_derivative: { title: 'IP Licensing Derivative', suitable: 'IP Licensing Teams', effects: ['Character Synergy', 'Product Adaptability', 'Official Style'], tags: ['Enterprise'] },

          // Batch
          sku_batch_main: { title: 'SKU Batch Main Gen', suitable: 'High-Volume Sellers', effects: ['Instant Multi-item', 'Standard Environment', 'Production Speed'], tags: ['Batch Support', 'Hot'] },
          model_face_batch: { title: 'Batch Model Face Replace', suitable: 'Agencies / Studios', effects: ['Consistent Identity', 'High Volume Sync', 'Quality Control'], tags: ['Batch Support'] },
          detail_page_batch: { title: 'Batch Detail Page Gen', suitable: 'Amazon/Platform Teams', effects: ['Templated Output', 'Text-Image Synergy', 'Extreme Efficiency'], tags: ['Batch Support'] },
          ad_batch_line: { title: 'Batch Ad Production Line', suitable: 'Digital Agencies', effects: ['Multi-variant Testing', 'Auto-Layout', 'Speed Export'], tags: ['Batch Support'] },
          product_visual_batch: { title: 'Batch Product Asset Gen', suitable: 'Catalog Teams', effects: ['Batch Background Swap', 'Lighting Preset', 'Unified Scale'], tags: ['Batch Support'] },
          multi_platform_batch: { title: 'Multi-platform Asset Batch', suitable: 'Operations Managers', effects: ['Resizing Automation', 'Channel specific style', 'Efficiency Boost'], tags: ['Batch Support'] },
          factory_batch: { title: 'Factory Batch Visual Tool', suitable: 'ODM/OEM Factories', effects: ['Fast Draft to Listing', 'Inquiry to Visualization', 'Volume Processing'], tags: ['Batch Support'] },
          shop_update_batch: { title: 'Shop Weekly Batch Update', suitable: 'Store Content Managers', effects: ['Seasonal Asset Sync', 'Unified Campaign Style', 'Massive Export'], tags: ['Batch Support'] },
        },
        cta: 'Use Template',
        modal: {
          title: 'Apply Template',
          uploadTitle: 'Upload Source Images',
          uploadDesc: 'Drag and drop or click to upload one or more source photos',
          promptTitle: 'Drawing Prompt',
          promptPlaceholder: 'Enter your prompt here...',
          promptLocked: 'This template uses a optimized preset prompt',
          generateBtn: 'Generate Now',
          generating: 'AI Generating...',
          resultTitle: 'Generation Result',
          download: 'Download 4K HD',
          feedback: 'Helpful?',
          reupload: 'Change Images',
        }
      },
      floatingCta: 'Experience Tourfly AI Now',
      about: {
        title: 'About Tourfly AI',
        hero: {
          subtitle: 'Entering the AI Era of Commercial Visual Production',
          desc: 'Tourfly AI focuses on intelligent generation of commercial visuals, providing ecommerce sellers, fashion brands, home textile enterprises, marketing teams, and manufacturing factories with complete AI solutions from creative generation to batch production.',
          ctaPrimary: 'Start for Free',
          ctaSecondary: 'Book Enterprise Demo',
        },
        whoWeAre: {
          title: 'We are not just a drawing tool',
          subtitle: 'We are a Commercial Visual Production Platform',
          cards: [
            { title: 'E-commerce Engine', desc: 'Main shots, detail pages, advertising images, and platform materials.' },
            { title: 'Fashion Engine', desc: 'Prints, garment renders, Lookbooks, and street snap visuals.' },
            { title: 'Home Textile Engine', desc: 'Bedding displays, bedroom renders, and global platform content.' },
            { title: 'Enterprise Engine', desc: 'Batch generation, team collaboration, API, and private deployment.' }
          ]
        },
        problemBox: {
          title: 'Traditional production is slowing growth',
          traditional: {
            title: 'Traditional Way',
            items: ['High photography cost', 'Long design cycles', 'Inefficient communication', 'Insufficient asset capacity', 'Slow time-to-market', 'Difficult localization']
          },
          tourfly: {
            title: 'Tourfly AI Way',
            items: ['Images in 30 seconds', 'Low cost & high frequency', 'Infinite creative assets', 'Rapid viral testing', 'Batch production support', 'Global market adaptation']
          }
        },
        stats: {
          title: 'Efficiency verified by real business',
          items: [
            { value: '10,000,000+', label: 'Commercial Visuals Generated' },
            { value: '1,200+', label: 'Enterprise Customers' },
            { value: '30s', label: 'Avg Production Time' },
            { value: '70%', label: 'Cost Reduction' }
          ]
        },
        whyUs: {
          title: 'Why professional teams choose Tourfly AI',
          items: [
            { title: 'Product Consistency', desc: 'Preserves product structure, materials, colors, and logo details.' },
            { title: 'Commercial Aesthetics', desc: 'Designed for conversion, not just random image generation.' },
            { title: 'Batch Capability', desc: 'Ideal for SKU matrices and high-frequency listing updates.' },
            { title: 'Deep Industry Optimization', desc: 'Specialized models for apparel, ecommerce, and textile.' },
            { title: 'Enterprise Ready', desc: 'Team permissions, API access, and secure private deployment.' },
            { title: 'Market Adaptability', desc: 'Deep understanding of ecommerce trends and local aesthetics.' }
          ]
        },
        industries: {
          title: 'Empowering High-Frequency Industries',
          tags: ['E-commerce', 'Cross-border', 'Apparel', 'Home Textile', 'Jewelry', 'Beauty', 'Shoes & Bags', 'Factories', 'Ad Agencies', 'MCN', 'Design Studios', 'Brands']
        },
        cases: {
          title: 'Real Growth for Customers',
          items: [
            { title: 'Apparel Brand', desc: '10x Increase in Visual Production Capacity' },
            { title: 'Cross-border Seller', desc: 'Significant CTR Boost in Advertising Assets' },
            { title: 'Home Textile Client', desc: 'Production Cycle Reduced from 3 Days to 30 Seconds' }
          ]
        },
        mission: {
          title: 'Mission & Vision',
          mission: { title: 'Our Mission', desc: 'To make high-quality commercial visuals faster, more affordable, and scalable.' },
          vision: { title: 'Our Vision', desc: 'To empower every enterprise with top-tier visual production capabilities.' }
        },
        finalCta: {
          title: 'Ready to upgrade your visual efficiency?',
          desc: 'Whether you are an individual seller, brand team, or large enterprise, Tourfly AI has the right solution for you.',
          btns: {
            primary: 'Start Now',
            secondary: 'Book Consultation',
            contact: 'Contact Business'
          }
        },
        footer: {
          brand: 'Tourfly AI',
          subtitle: 'Commercial Visual Intelligence Engine',
          nav: {
            solutions: 'Solutions',
            templates: 'Templates',
            wechat: 'Mini Program',
            pricing: 'Pricing',
            about: 'About Us'
          },
          contact: {
            email: 'Business Email',
            wechat: 'Official Account',
            support: 'Contact Customer Service',
            qrLabel: 'Customer Service QR'
          }
        }
      },
      workflow: {
        title1: 'Intelligent',
        title2: 'Production Chain',
        subtitle: 'Integrating creative generation with smart manufacturing supply chains.',
        coreEngine: 'Smart Engine',
        step1: {
          title: 'Design Generation',
          desc: 'Convert sketches or concepts into professional design drafts and tech packs.',
        },
        step2: {
          title: 'Virtual Sampling',
          desc: 'Generate photorealistic virtual samples for rapid prototyping and stakeholder review.',
        },
        step3: {
          title: 'E-comm Production',
          desc: 'Automatically generate model shots and product listings for multi-platform deployment.',
        },
        step4: {
          title: 'SCM Integration',
          desc: 'Seamlessly transition from visual design to manufacturing and procurement workflows.',
        },
      },
      footer: {
        desc: 'The next generation of AI visual solutions. Empowering creators with high-resolution workflows and intelligent editing.',
        platform: 'Platform',
        company: 'Company',
        careers: 'Careers',
        privacy: 'Privacy',
        terms: 'Terms',
        wechatTitle: 'Join our Community',
        wechatDesc: 'Scan to enter WeChat Mini Program',
        rights: '© 2026 Tourfly AI. All rights reserved.',
      },
    },
  },
  zh: {
    translation: {
      nav: {
        brandName: '图蝇 AI',
        solutions: '解决方案',
        templates: '案例模板',
        wechat: '微信小程序',
        gallery: '画廊',
        pricing: '价格',
        faq: '常见问题',
        about: '关于',
        getStarted: '登录控制台',
      },
      hero: {
        badge: '',
        title1: '图蝇AI',
        title2: '商业视觉生成引擎',
        subtitle: '为电商、品牌、服装与制造业打造下一代 AI 内容生产力，30秒生成商品图、广告图、模特图、印花图',
        ctaStart: '立即体验',
        ctaSubtitle: '企业级生产力工具',
        ctaShowcase: '观看案例',
        promptPlaceholder: '描述您的视觉创意...',
      },
      stats: {
        images: '3,800,000+',
        imagesLabel: '累计生成商业视觉内容',
        clients: '500+',
        clientsLabel: '企业客户正在使用',
        speed: '30秒',
        speedLabel: '从想法到成图',
        cost: '70%',
        costLabel: '减少传统拍摄与设计成本',
      },
      industries: {
        title: '图蝇AI正在服务这些行业',
        ecommerce: {
          title: '电商卖家',
          desc: '主图 / 详情页 / 场景图'
        },
        fashion: {
          title: '服装品牌',
          desc: '印花设计 / 款式开发 / 模特图'
        },
        factory: {
          title: '设计师',
          desc: '作品集 / 创意概念 / 灵感图'
        },
        agency: {
          title: '广告公司',
          desc: 'Campaign KV / 海报 / 视频素材'
        },
        media: {
          title: '自媒体',
          desc: '封面图 / 爆款视觉'
        },
        enterprise: {
          title: '企业客户',
          desc: '私有部署 / API接入'
        }
      },
      impact: {
        title: '视觉冲击力',
        subtitle: '见证从原始拍摄到影棚级商业资产的蜕变。',
        beforeLabel: '原始图片',
        afterLabel: 'AI效果',
      },
      solutions: {
        hero: {
          title: '图蝇AI，视觉解决方案平台',
          subtitle: '用前沿AI生图技术与自动化工作流赋能产业升级。',
          title2: 'AI驱动的创意呈现',
          subtitle2: '利用我们先进的视觉引擎开启无限可能。',
          title3: '企业级服务',
          subtitle3: '安全、可扩展，专为专业生产团队打造。',
          cta: '立即体验',
          watchDemo: '观看演示',
          learnMore: '了解技术细节',
        },
        modules: {
          creation: {
            title: '智能绘画创作',
            desc: '领先的文生图、图生图引擎，配合专业统一画布，实现自由的创意编辑与图像重绘。',
          },
          workflow: {
            title: '专业工作流',
            desc: '集成SDXL、FLUX等多种先进模型，专为电商商拍、服装模特替换打造的自动化生产流程。',
          },
          tools: {
            title: 'AI工具集',
            desc: '集成ControlNet精确控制、AI分色、智能换色、4K超分放大等一系列专业设计辅助工具。',
          },
          training: {
            title: '模型训练定制',
            desc: '提供Dreambooth与LoRA小样本训练，为品牌定制专属模特、风格与产品模型，确图片的保一致性。',
          },
          enterprise: {
            title: '私有化部署与API',
            desc: '提供安全的企业级私有化部署方案与高性能API接入，满足大规模、高并发的商业视觉生产。',
          },
          hardware: {
            title: '软硬件一体机',
            desc: '将图蝇AI本地化部署在桌面级算力盒子上，成为企业的“AI助手”的解决方案。',
          },
          learnMore: '了解更多',
        },
        scenarios: {
          ecommerce: {
            title: '电商视觉解决方案',
            intro: '上传产品图，即刻生成：',
            items: [
              '亚马逊主图',
              '小红书种草图',
              '场景图',
              '节日促销图'
            ],
            footer: '帮助卖家提升点击率与转化率',
            features: ['全自动抠图', '多模态补全', '光影模拟', '4K输出'],
          },
          fashion: {
            title: '服装设计解决方案',
            intro: '30秒生成：',
            items: [
              '印花图案',
              '成衣效果图',
              '模特街拍图',
              '上新营销图'
            ],
            metrics: [
              '上新速度提升 10倍',
              '打样成本降低 70%'
            ],
            footerText: '帮助品牌实现：',
            features: ['模特替换', '设计保真', '虚拟试穿', '批量生成'],
          },
          textile: {
            title: '家纺花型视觉方案',
            intro: '输入花型图案，一键生成：',
            items: [
              '四件套床模图',
              '卧室场景图',
              '海外平台图',
              '季节系列图'
            ],
            features: ['材质模拟', '循环平铺', '色谱分离', '多维预览'],
          },
          pod: {
            title: 'POD柔性供应链方案',
            intro: '输入图案，即刻生成：',
            items: [
              'T恤上款图',
              '包袋印花图',
              '家居定制图',
              '海外电商展示图'
            ],
            metrics: [
              '快速接单',
              '无货源测试',
              '小单快返'
            ],
            footerText: '支持：',
          },
          bags: {
            title: '箱包鞋履解决方案',
            intro: '上传白膜图或产品图，一键生成：',
            items: [
              '包袋上款图',
              '鞋履配色图',
              '高级广告图',
              '模特穿搭图',
              '电商详情图'
            ],
            metrics: [
              '快速上新',
              '降低拍摄成本',
              '提高新品测试效率'
            ],
            footerText: '帮助品牌实现：',
          },
          jewelry: {
            title: '珠宝配饰解决方案',
            intro: '上传产品图，即刻生成：',
            items: [
              '高奢静物图',
              '模特佩戴图',
              '礼盒广告图',
              '节日营销图',
              '电商详情图'
            ],
            footer: '帮助品牌提升高级感与溢价能力。',
          },
          beauty: {
            title: '美妆个护解决方案',
            intro: '上传产品图，一键生成：',
            items: [
              '护肤品广告图',
              '成分视觉图',
              '场景种草图',
              '小红书推广图',
              '节日营销KV'
            ],
            footer: '帮助品牌持续输出高频内容。',
          },
          marketing: {
            title: '品牌营销内容解决方案',
            intro: '快速生成：',
            items: [
              'Campaign KV',
              '社媒海报',
              '活动主视觉',
              '门店宣传图',
              '视频分镜图'
            ],
            footer: '帮助品牌实现低成本高频传播。',
          },
          enterprise: {
            title: '企业私有部署方案',
            intro: '为企业提供：',
            items: [
              '私有模型部署',
              'API接入',
              '多账号协作',
              '批量生产工作流',
              '数据安全管理'
            ],
            footer: '适合：品牌集团 / 工厂 / 平台公司',
          },
          art: {
            title: '数字艺术',
            desc: '为插画师与概念艺术家提供加速创作的创意工具。',
            features: ['风格迁移', '草图成画', '无限画布'],
          },
        },
        enterprise: {
          badge: '企业级解决方案',
          title: '企业/团队方案',
          desc: '面向高频生产团队的可扩展解决方案。',
          features: ['批量生成', 'API 接入', '企业工作流', '团队协作管理'],
          cta: '联系销售',
        },
      },
      comparison: {
        title1: '生产',
        title2: '效能对比',
        subtitle: '传统摄影模式 vs. 图蝇AI 生成效率。',
        badge: '竞争优势',
        mainTitle1: '传统拍摄',
        mainTitle2: '图蝇AI',
        cost: '高昂成本 (¥¥¥¥)',
        costAI: '极低成本 (¥)',
        time: '数周至数月',
        timeAI: '数小时至数天',
        iteration: '重拍成本高',
        iterationAI: '无限实时迭代',
        quote: '传统的生产受制于物理空间与成本，图蝇的生产力仅受限于您的想象力。',
      },
      pricing: {
        title1: '算力服务',
        title2: '充值方案',
        subtitle: '选择最适合您生产需求的充值方案。',
        mostPopular: '最受欢迎',
        perMonth: '',
        creditsLabel: '对应积分',
        imagesLabel: '生成额度',
        standard: {
          name: '标准版',
          price: '¥1999.00',
          credits: '10000',
          images: '约2000张',
          desc: '适合个人创作者。',
          cta: '立即充值',
          features: [
            '海量参考图库',
            '专属VIP 5*8线上支持'
          ],
        },
        flagship: {
          name: '旗舰版',
          price: '¥4999.00',
          credits: '41500',
          images: '约8300张',
          desc: '适合专业生产团队。',
          cta: '立即充值',
          features: [
            '个性化场景模板定制',
            '海量参考图库',
            '专属VIP 5*8线上支持'
          ],
        },
        enterprise: {
          name: '企业版',
          price: '¥20000.00',
          credits: '200000',
          images: '约40000张',
          desc: '大规模商业生产方案。',
          cta: '联系销售',
          features: [
            '个性化场景模板定制',
            '海量参考图库',
            '专属企业后台管理 (驾驶舱面板/积分池分配等)',
            '专属VIP 5*8线上支持',
            '定制专属模特形象',
            '无限图像生成 (文生图)'
          ],
        },
        custom: {
          name: '定制版',
          price: '¥50000.00',
          credits: '625000',
          images: '约125000张',
          desc: '深度定制的大型生产方案。',
          cta: '立即咨询',
          features: [
            '个性化场景模板定制',
            '海量参考图库',
            '专属企业后台管理 (驾驶舱面板/积分池分配等)',
            '专属VIP 7*12线上支持',
            '定制专属模特形象',
            '无限图像生成 (文生图)',
            '无限风格模型 (文生图Lora模型)'
          ],
        },
      },
      comparisonTable: {
        title: '为什么专业团队选择图蝇 AI',
        subtitle: '全方位能力对比',
        col1: '核心能力',
        col2: '通用 AI 工具',
        col3: '图蝇 AI',
        exclusive: '行业领先',
        row1: { name: '产品细节稳定输出', v1: '较弱', v2: '强' },
        row2: { name: '电商转化视觉理解', v1: '一般', v2: '强' },
        row3: { name: '生成固定的人物形象', v1: '较弱', v2: '逼真' },
        row4: { name: '批量出图能力', v1: '有限', v2: '强' },
        row5: { name: '印花/花型设计', v1: '基础', v2: '专业级' },
        row6: { name: '企业私有部署', v1: '少量支持', v2: '完整支持' },
        row7: { name: '企业个性化服务', v1: '无', v2: '支持' },
      },
      gallery: {
        title1: '灵感',
        title2: '素材库',
        subtitle: '探索由图蝇社区生成的超高清视觉资产。',
        credits: '剩余积分',
        remix: '套用此风格',
        remixTitle: '重混创意',
        originalPrompt: '原始提示词',
        remixDesc: '“重混”将消耗 1 积分，并根据您当前的偏好为此风格生成新的变体。',
        btnConfirm: '确认重混',
        btnRemixing: '正在生成...',
        btnCancel: '取消',
        errorTitle: '积分不足',
        errorLink: '升级套餐以继续重混',
      },
      cta: {
        title: '准备好改变您的工作方式了吗？',
        subtitle: '加入已经在使用图蝇 AI 加速生产的行业领先者。',
        primary: '立即体验',
        secondary: '观看产品演示',
      },
      mobile: {
        title: '图蝇 AI 移动端平台',
        subtitle: '让每个人都能在掌心创作商业级 AI 视觉',
        manifesto: [
          '全场景AI视觉处理矩阵 - 7大核心引擎覆盖商拍全流程，一站式解决所有商业摄影需求。',
          '热门案例快捷入口：一键还原常用应用场景参数。',
          'AI视频工作流 - 组件化编排AI视频生成流程，重新定义视频生成方式。',
          '团队协作、积分池管理、权限分配和合伙人分销系统。'
        ],
        modules: {
          creation: {
            title: '核心创作模块',
            items: [
              { name: '多图融合', desc: '将多张图片进行智能融合，实现服装、配饰、人物、场景等复杂元素的组合创意生成。' },
              { name: '模特换衣', desc: '为模特图片更换不同服装，支持虚拟试穿，具备真实的褶皱与材质模拟。' },
              { name: '模特换脸', desc: '为模特图片更换人脸，智能保持原始表情和角度，支持脸部增强。' },
              { name: '商品换背景', desc: '针对不同品类优化算法，实现棚拍级质感的背景智能替换。' }
            ]
          },
          management: {
            title: '资产与管理模块',
            items: [
              { name: '企业管理', desc: '包含成员权限设置、资源分配（积分分配）、团队作品查看、企业AI应用统计等。' },
              { name: '创作管理', desc: '管理所有AI生成的作品，支持作品预览、下载、分享与连续编号管理。' },
              { name: '合伙人分销', desc: '合伙人功能入口，包括收益结算、营销能力、推广统计等一体化管理。' }
            ]
          },
          enterprise: {
            title: 'SaaS 超级管理',
            items: [
              { name: '商业智能 (BI)', desc: '多维度数据看版与洞察，助力企业掌握每一次视觉营销的表现。' },
              { name: 'API 开放平台', desc: '生态扩展能力，支持与企业现有 ERP/中台系统深度集成。' },
              { name: '算力资源池', desc: '统一资源调度与成本控制，确保企业级生产的高效与稳定。' }
            ]
          }
        },
        cta: '扫描二维码进入小程序',
      },
      faq: {
        title: '常见问题 FAQ',
        subtitle: '关于图蝇AI，你关心的问题都在这里',
        desc: '从产品能力到企业合作，你想了解的答案都在这里',
        categories: {
          all: '全部',
          product: '产品能力',
          pricing: '价格收费',
          industry: '行业应用',
          enterprise: '企业合作',
          account: '账户支持'
        },
        items: [
          { category: 'product', q: '图蝇AI可以做什么？', a: '图蝇AI专注商业视觉智能生成，可快速制作：电商主图、商品场景图、亚马逊平台图、模特街拍图、服装设计图、印花图案图、家纺床模图、广告海报图、品牌营销图、批量SKU素材图。' },
          { category: 'product', q: '图蝇AI和普通AI绘图工具有什么区别？', a: '普通AI绘图工具偏创意生成，图蝇AI更专注真实商业落地。我们更强调：产品一致性、商业审美、转化率导向、行业模板化生产、批量生成能力、企业级交付能力。' },
          { category: 'product', q: '生成图片真实吗？', a: '图蝇AI针对商业视觉训练优化，生成效果可接近专业摄影棚级质感，适合电商销售、品牌宣传与内容营销使用。' },
          { category: 'product', q: '能保持原产品细节吗？', a: '支持高精度保留产品结构、颜色、材质、Logo、五金、比例等关键细节，特别适合箱包、服装、家居、饰品等行业。' },
          { category: 'product', q: '多久可以生成一张图？', a: '通常30秒左右即可完成一张高质量商业图。' },
          { category: 'product', q: '支持中文操作吗？', a: '支持全中文界面与中文输入，使用门槛极低。' },
          { category: 'pricing', q: '图蝇AI怎么收费？', a: '支持灵活计费模式：积分制、月套餐、年套餐、企业合作版。不同用户可按需求选择。' },
          { category: 'pricing', q: '新用户可以免费体验吗？', a: '支持新用户免费体验部分功能，注册即可开始试用。' },
          { category: 'pricing', q: '充值支持哪些支付方式？', a: '支持微信支付、支付宝、银行卡等常见方式业务。' },
          { category: 'pricing', q: '生成失败会扣费吗？', a: '异常失败任务通常支持返还积分，具体以系统规则为准。' },
          { category: 'industry', q: '适合哪些行业使用？', a: '电商卖家、跨境卖家、服装品牌、家纺企业、珠宝饰品、美妆个护、食品饮料、广告公司、设计工作室、制造工厂。' },
          { category: 'industry', q: '适合淘宝、天猫、拼多多吗？', a: '非常适合，支持生成主图、详情页视觉图、活动促销图、上新图、商品场景图。' },
          { category: 'industry', q: '适合亚马逊、Shopify、Temu吗？', a: '支持跨境平台视觉需求，包括白底主图、Lifestyle场景图、广告素材图、本地化营销图。' },
          { category: 'industry', q: '适合服装行业吗？', a: '非常适合服装品牌与设计团队，可生成印花图案、成衣效果图、模特街拍图、Lookbook等。' },
          { category: 'industry', q: '适合家纺行业吗？', a: '支持花型图案快速生成床模图、卧室场景图、海外平台图等。' },
          { category: 'enterprise', q: '支持批量生成素材吗？', a: '支持批量生成多SKU、多场景、多尺寸素材，适合高频上新团队。' },
          { category: 'enterprise', q: '支持多人协作吗？', a: '支持企业团队账号、权限管理、多人协同使用。' },
          { category: 'enterprise', q: '支持API接口吗？', a: '支持API接入，可与ERP、商城系统、内部平台打通。' },
          { category: 'enterprise', q: '支持私有化部署吗？', a: '支持企业私有化部署，适合品牌客户与数据敏感型企业。' },
          { category: 'enterprise', q: '如何申请企业合作？', a: '可通过页面底部联系方式提交需求，我们将安排顾问与您对接。' },
          { category: 'account', q: '如何注册账号？', a: '支持手机号、邮箱快速注册，也可通过微信小程序体验。' },
          { category: 'account', q: '忘记密码怎么办？', a: '可通过登录页找回密码功能重置。' },
          { category: 'account', q: '客服如何联系？', a: '可添加客服微信，或通过官网在线客服咨询。' },
          { category: 'account', q: '生成图片可以商用吗？', a: '用户在遵守平台规则前提下生成的内容，通常可用于商业用途，具体请参考使用协议。' }
        ],
        stillHaveQuestions: {
          title: '还有问题？',
          desc: '欢迎联系我们的顾问团队，为您推荐最适合的使用方案。',
          btns: {
            service: '联系客服',
            experience: '立即免费体验',
            demo: '观看演示视频'
          }
        }
      },
      templates: {
        marketplace: '商业模板市场',
        title: 'AI 商业模板市场',
        subtitle: '上传产品，即刻复刻商业级视觉效果',
        categories: {
          all: '全部',
          ecommerce: '电商卖货',
          model: '模特视觉',
          ad: '产品广告',
          fashion: '服装设计',
          textile: '花型家纺',
          brand: '品牌企划',
          creative: '创意衍生',
          batch: '批量生产',
        },
        labels: {
          suitableFor: '适用对象',
          effects: '核心能力',
          points: '积分',
          batch: '支持批量',
          enterprise: '企业版',
          conversion: '高转化',
          beginner: '推荐新手',
          hot: '热门'
        },
        items: {
          // 电商卖货
          main_shot_pro: { title: '爆款主图增强版', suitable: '亚马逊/天猫/拼多多/速卖通卖家', effects: ['4K超清级画质', '全局光影自然融合', '显著提升点击率'], tags: ['高转化', '热门'] },
          scene_display: { title: '商品场景展示图', suitable: '社媒/电商卖家/营销号', effects: ['极速生成氛围感场景', '光处理自然逼真', '多场景适配'], tags: ['15积分'] },
          high_ctr_shot: { title: '高点击率主图', suitable: 'Shopee/Lazada/TikTok卖家', effects: ['视觉焦点优化', '动态感构图呈现', '支持一键批量'], tags: ['支持批量'] },
          detail_top_visual: { title: '详情页首屏视觉图', suitable: '精品品牌/Shopify独立站', effects: ['高大上大屏视野', '细节纹理极致还原', '情绪氛围光影'], tags: ['企业版'] },
          amazon_template: { title: '亚马逊主图模板', suitable: 'FBA精品卖家', effects: ['符合平台纯白底规则', '商品细节分毫毕现', '统一视觉规范'], tags: ['推荐新手'] },
          new_arrival: { title: '新品上架图', suitable: '服饰/日用品/轻工品牌', effects: ['极速上新批量出图', '季节感氛围铺设', '色调和谐统一'], tags: ['15积分'] },
          high_value_product: { title: '高客单商品图', suitable: '腕表/高端数码/珠宝品牌', effects: ['奢华感材质光效', '微距局部精修', '专业影棚质感'], tags: ['企业版'] },
          cross_border_pro: { title: '跨境平台卖货图', suitable: '跨境精品/普货卖家', effects: ['符合海外市场审美', '多角度全方位展示', '降低商拍成本'], tags: ['高效'] },
          
          // 模特视觉
          model_face_pro: { title: '模特换脸高级版', suitable: '服装品牌/广告公司/达人', effects: ['面部特征高度写实', '4K高清皮肤纹理', '表情自然融合'], tags: ['企业版', '15积分'] },
          model_bg_pro: { title: '模特换背景大片', suitable: '摄影工作室/小红书/品牌', effects: ['室内/外场景自然置换', '光影透视完美对齐', '极速产出'], tags: ['热门', '高效'] },
          model_outfit: { title: '模特换衣服模板', suitable: '服装品牌/网店/样衣厂', effects: ['垂感褶皱真实模拟', '花型纹理对齐', '风格即刻转换'], tags: ['15积分'] },
          hand_fix: { title: '模特手部修复版', suitable: 'AI设计师/内容创作者', effects: ['解剖结构真实还原', '皮肤质感精准匹配', '无痕拼接'], tags: ['推荐新手'] },
          model_prop: { title: '模特换物品展示图', suitable: '生活方式类拍摄/营销', effects: ['抓握力度逻辑对齐', '阴影遮挡真实交互', '无违和放置'], tags: ['进阶'] },
          street_snap: { title: '真人街拍图', suitable: '潮流服饰/运动品牌', effects: ['真实城市环境背景', '动感模糊艺术效果', '氛围感十足'], tags: ['热门'] },
          brand_model: { title: '品牌模特大片', suitable: '高端服装/奢侈品', effects: ['品牌调性深度嵌入', '视觉DNA统一输出', '模特气质提升'], tags: ['企业版'] },
          batch_model: { title: '批量模特出图', suitable: '大规模电商上新', effects: ['多角度批量成图', '人物一致性控制', '极速云端渲染'], tags: ['支持批量'] },

          // 产品广告
          brand_ad_pro: { title: '品牌广告大片', suitable: '广告公司/品牌自媒体', effects: ['电影级视觉冲击', '创意构图打破常规', '细节质感炸裂'], tags: ['企业版'] },
          premium_poster: { title: '高级产品海报', suitable: '市场部/营销团队', effects: ['图文版式平衡', '色彩营销心理对齐', '大牌感视觉布局'], tags: ['热门'] },
          luxury_kv: { title: '奢感产品KV', suitable: '珠宝/香氛/名贵品', effects: ['诱人光感捕捉', '极致材质打磨', '高端审美风范'], tags: ['奢华'] },
          cinematic_ad: { title: '电影级产品广告图', suitable: '创意导演/视觉总监', effects: ['戏剧性光效层次', '氛围烟雾粒子模拟', '叙事化视觉语言'], tags: ['企业版'] },
          launch_visual: { title: '新品发布视觉图', suitable: '公关公司/创业项目', effects: ['科技未来感呈现', '爆炸式震撼构图', '产品核心高光'], tags: ['新品'] },
          still_life_ad: { title: '高级静物广告图', suitable: '静物摄影师/美妆', effects: ['微距焦点追踪', '极致布光雕琢', '解构主义构图'], tags: ['15积分'] },
          social_promo: { title: '社媒推广视觉图', suitable: '社媒运营/小红书', effects: ['1:1/9:16画幅优化', '符合爆款流量审美', '极速方案迭代'], tags: ['高效'] },
          commercial_campaign: { title: '商业宣传大片', suitable: 'B2B企业/连锁品牌', effects: ['全套系视觉延展', '全场景多物料覆盖', '中性专业商务感'], tags: ['热门'] },

          // 服装设计
          fashion_concept: { title: '服装设计概念图', suitable: '独立设计师/品牌研发', effects: ['先锋设计风格探索', '创意轮廓快速生成', '手绘草图秒变大写'], tags: ['创意'] },
          fashion_moodboard: { title: 'Fashion Moodboard', suitable: '创意总监/企划人员', effects: ['灵感素材跨时空融合', '色系情绪一键生成', '设计逻辑可视化'], tags: ['推荐购买'] },
          draft_to_garment: { title: '设计稿转成衣图', suitable: '样衣厂/制版师', effects: ['面料实感精准映射', '版型结构比例还原', '生产前预览'], tags: ['高效'] },
          garment_render: { title: '成衣效果图', suitable: '服装工作室/批发商', effects: ['真实面料质感呈现', '穿着动态褶皱模拟', '商拍级渲染'], tags: ['15积分'] },
          fashion_plan: { title: '服装系列企划图', suitable: '买手/商品企划', effects: ['跨款视觉一致性', '多色系快速裂变', '主题系列感输出'], tags: ['企业版'] },
          men_fashion: { title: '男装大片模板', suitable: '男装品牌/店铺', effects: ['硬核质感光影', '面料粗粝感呈现', '商务休闲风'], tags: ['热门'] },
          women_apparel: { title: '女装上新图', suitable: '时尚女装/网红店', effects: ['唯美光影滤镜', '皮肤清透感处理', '色彩明快抓眼'], tags: ['高转化'] },
          lookbook_pro: { title: 'Lookbook展示图', suitable: '品牌Lookbook/画册', effects: ['影棚背景统一输出', '极简构图高级感', '系列感批量排版'], tags: ['支持批量'] },

          // 花型家纺
          high_pattern: { title: '高级印花图案设计', suitable: '面料设计师/花样公司', effects: ['复杂细节生成', '无限创意灵感', '色彩搭配方案优化'], tags: ['创意', '热门'] },
          seamless_pattern: { title: '四方连续花型图', suitable: '印染厂/面料商', effects: ['无缝衔接循环平铺', '极高分辨率输出', '即刻投入生产'], tags: ['高效'] },
          paisley_template: { title: '佩斯利花型模板', suitable: '丝绸/民族风品牌', effects: ['经典纹理重构', '复杂细节层层解析', '配色方案多选'], tags: ['15积分'] },
          western_trend: { title: '欧美趋势花型图', suitable: '外贸工厂/出口品牌', effects: ['紧扣国际流行审美', '几何抽象简约风', '莫兰迪色系运用'], tags: ['15积分'] },
          oriental_pattern: { title: '国风花型图', suitable: '国潮/传统品牌', effects: ['水墨/重彩风格呈现', '传统元素现代重构', '内敛雅致质感'], tags: ['15积分'] },
          bedding_display: { title: '床品床模展示图', suitable: '家纺电商卖家', effects: ['自然折痕垂坠模拟', '温馨家居氛围渲染', '光影透视对齐'], tags: ['热门'] },
          bedroom_scene: { title: '卧室家纺场景图', suitable: '软装品牌/定制店', effects: ['全局环境光模拟', '材质软包触感', '真实卧室透视'], tags: ['15积分'] },
          multi_color_pattern: { title: '多色系花型延展', suitable: '设计工作室', effects: ['极速配色裂变', '色板快速替换', '批量预览效果'], tags: ['支持批量'] },

          // 品牌企划
          brand_vis_pro: { title: '品牌VIS系统模板', suitable: '中小企业/初创团队', effects: ['视觉形象全案输出', '多物料自动化适配', '提升专业信任感'], tags: ['企业版'] },
          brand_moodboard: { title: '品牌Moodboard', suitable: '创意策划人员', effects: ['品牌基调视觉定义', '调性DNA精准捕捉', '色彩情绪对齐'], tags: ['推荐购买'] },
          brand_proposal: { title: '品牌提案视觉图', suitable: '比稿公司/项目经理', effects: ['方案视觉化呈现', '高逼格配图增强说服', '影棚级质感'], tags: ['15积分'] },
          brand_tonality: { title: '品牌调性内容图', suitable: '品牌运营/公关', effects: ['情绪价值拉满', '视觉语言统一', '小众化审美表达'], tags: ['热门'] },
          brand_website: { title: '品牌官网视觉图', suitable: 'UI/UX设计师/品牌部', effects: ['适配大屏高清输出', '留白与层次感构图', '极简商务现代风'], tags: ['15积分'] },
          brand_story_ad: { title: '品牌故事海报图', suitable: '社交媒体运营', effects: ['叙事型版式呈现', '文字与影像深度融合', '情感化触达'], tags: ['15积分'] },
          global_brand_plan: { title: '国际品牌感方案', suitable: '出海品牌/高端线', effects: ['跨文化通用语境', '极致克制审美', '大师级灰调运用'], tags: ['企业版'] },
          brand_unity: { title: '品牌视觉统一图', suitable: '全案设计服务商', effects: ['跨平台视觉一致', '全局色系强控', '品牌心智锤炼'], tags: ['支持批量'] },

          // 创意衍生
          creative_gift: { title: '文创周边设计图', suitable: 'IP方/礼品店铺', effects: ['多材质应用模拟', '写实光影交互', '品牌调性深度植入'], tags: ['创意'] },
          opc_display: { title: 'OPC产品展示图', suitable: '工业设计师/科技公司', effects: ['结构细节极致呈现', '未来感金属切角', '精密仪器视感'], tags: ['进阶'] },
          pod_extension: { title: 'POD多品类延展图', suitable: '跨境POD卖家', effects: ['一键映射多种产品', '极速视觉验证方案', '无货源批量上线'], tags: ['高效'] },
          single_to_multi: { title: '单图多产品应用图', suitable: '电商全链路运营', effects: ['生产力倍率提升', '跨类目风格统一', '极速迭代方案'], tags: ['高效'] },
          tshirt_display: { title: 'T恤图案展示图', suitable: '潮牌/T恤卖家', effects: ['面料纹理模拟', '精准定位印刷效果', '街头穿搭氛围'], tags: ['热门'] },
          canvas_bag: { title: '帆布袋图案图', suitable: '设计师店铺/周边', effects: ['自然帆布粗纹模拟', '图形折叠形变处理', '清新田园风格'], tags: ['15积分'] },
          gift_series: { title: '礼品周边系列图', suitable: '企业礼赠/节庆', effects: ['系列感成套输出', '礼物氛围极致渲染', '统一品牌烙印'], tags: ['企业版'] },
          ip_derivative: { title: 'IP授权衍生图', suitable: 'IP授权管理', effects: ['保留角色核心特征', '适配多元产品形态', '官方正品级质感'], tags: ['企业版'] },

          // 批量生产
          sku_batch_main: { title: 'SKU批量主图生成', suitable: '大体量上新卖家', effects: ['多SKU自动配景', '固定光影一致性', '工业级成图速度'], tags: ['支持批量', '热门'] },
          model_face_batch: { title: '批量模特换脸图', suitable: '摄影机构/云修图', effects: ['保持面部一致性', '万级订单极速流转', '全自动质量拦截'], tags: ['支持批量'] },
          detail_page_batch: { title: '批量详情页生成', suitable: '专业详情页团队', effects: ['模版化自动产出', '排版与画面同步', '单人完成万人工作'], tags: ['支持批量'] },
          ad_batch_line: { title: '批量广告图生产线', suitable: '效果广告投放商', effects: ['海量素材快速裂变', '针对投放环境自适应', '毫秒级海报拼接'], tags: ['支持批量'] },
          product_visual_batch: { title: '批量产品视觉图', suitable: '画册/型录制作方', effects: ['背景批量一键切换', '统一大小比例对齐', '即刻产出产品集'], tags: ['支持批量'] },
          multi_platform_batch: { title: '多平台素材批量图', suitable: '全域运营经理', effects: ['尺寸一键多向延展', '各平台风格自动匹', '发布效率拉满'], tags: ['支持批量'] },
          factory_batch: { title: '工厂接单批量图', suitable: '源头代工厂商', effects: ['草图意向图秒出大片', '询价即刻可视化', '增强接单确信感'], tags: ['支持批量'] },
          shop_update_batch: { title: '店铺批量上新图', suitable: '店铺内容负责人', effects: ['季节全库存翻新', '促销主题全店同步', '统一视觉规范同步'], tags: ['支持批量'] },
        },
        cta: '立即套用模板',
        modal: {
          title: '套用模板',
          uploadTitle: '上传原始图片',
          uploadDesc: '拖拽或点击上传一张或多张原始照片',
          promptTitle: '绘图提示词',
          promptPlaceholder: '输入您的绘图需求...',
          promptLocked: '此模板已预设优化提示词',
          generateBtn: '开始生成',
          generating: 'AI 正在生成...',
          resultTitle: '生成结果',
          download: '下载 4K 超清图',
          feedback: '效果满意吗？',
          reupload: '更换图片',
        }
      },
      floatingCta: '立即体验图蝇AI',
      about: {
        title: '关于图蝇AI',
        hero: {
          subtitle: '让商业视觉生产进入 AI 时代',
          desc: '图蝇AI专注于商业视觉智能生成，为电商卖家、服装品牌、家纺企业、营销团队与制造工厂，提供从创意生成、产品出图、模特视觉到批量生产的完整AI解决方案。',
          ctaPrimary: '立即免费体验',
          ctaSecondary: '预约企业演示',
        },
        whoWeAre: {
          title: '我们不是通用绘图工具',
          subtitle: '我们是商业视觉生产平台',
          cards: [
            { title: '电商视觉引擎', desc: '主图、详情页、广告图、平台素材快速生成' },
            { title: '时尚设计引擎', desc: '印花图案、成衣效果图、Lookbook、街拍视觉生成' },
            { title: '家纺场景引擎', desc: '花型一键生成床模图、卧室图、海外平台图' },
            { title: '企业生产引擎', desc: '批量生成、团队协作、API接入、私有化部署' }
          ]
        },
        problemBox: {
          title: '传统视觉生产，正在拖慢增长速度',
          traditional: {
            title: '传统方式',
            items: ['摄影成本高', '设计周期长', '反复沟通低效', '素材产能不足', '上新速度慢', '跨境本地化困难']
          },
          tourfly: {
            title: '图蝇AI方式',
            items: ['30秒生成商业图', '低成本高频产出', '无限扩展创意素材', '快速测试爆款视觉', '支持批量生产', '全球市场快速适配']
          }
        },
        stats: {
          title: '被真实业务验证的效率提升',
          items: [
            { value: '10,000,000+', label: '累计生成商业视觉图' },
            { value: '1,200+', label: '企业客户服务经验' },
            { value: '30秒', label: '平均出图时间' },
            { value: '70%', label: '平均视觉成本下降' }
          ]
        },
        whyUs: {
          title: '为什么专业团队选择图蝇AI',
          items: [
            { title: '产品一致性强', desc: '准确保留产品结构、材质、颜色、Logo细节' },
            { title: '更懂商业审美', desc: '不是随机出图，而是面向成交结果设计视觉' },
            { title: '批量生成能力', desc: '适合SKU矩阵、日常上新、活动素材生产' },
            { title: '行业场景深度优化', desc: '服装、电商、家纺、品牌营销专项模型能力' },
            { title: '企业级交付能力', desc: '支持团队账号、权限管理、API接口、私有化部署' },
            { title: '中国市场适配度高', desc: '更理解中文需求、电商玩法与本土商业审美' }
          ]
        },
        industries: {
          title: '深耕多个高频商业行业',
          tags: ['电商卖家', '跨境卖家', '服装品牌', '家纺企业', '珠宝饰品', '美妆个护', '鞋包配饰', '制造工厂', '广告公司', 'MCN机构', '设计工作室', '连锁品牌']
        },
        cases: {
          title: '客户正在获得真实增长',
          items: [
            { title: '服装品牌客户', desc: '新品视觉产能提升10倍' },
            { title: '跨境卖家客户', desc: '广告素材点击率显著提升' },
            { title: '家纺客户', desc: '床模图生产周期从3天缩短至30秒' }
          ]
        },
        mission: {
          title: '我们的使命与愿景',
          mission: { title: '我们的使命', desc: '让高质量商业视觉制作更快、更低成本、更规模化。' },
          vision: { title: '我们的愿景', desc: '让每一家企业，都拥有顶级视觉生产能力。' }
        },
        finalCta: {
          title: '准备升级你的视觉生产效率？',
          desc: '无论你是个人卖家、品牌团队，还是大型企业，图蝇AI都能提供适合你的解决方案。',
          btns: {
            primary: '立即免费体验',
            secondary: '预约企业方案咨询',
            contact: '联系商务合作'
          }
        },
        footer: {
          brand: '图蝇AI',
          subtitle: '商业视觉智能引擎',
          nav: {
            solutions: '解决方案',
            templates: '案例模板',
            wechat: '微信小程序',
            pricing: '价格',
            about: '关于我们'
          },
          contact: {
            email: '商务合作邮箱',
            wechat: '微信公众号',
            support: '联系客服',
            qrLabel: '微信客服二维码'
          }
        }
      },
      workflow: {
        title1: '智能',
        title2: '生产链路',
        subtitle: '实现从创意生成到智能制造供应链的深度深度集成。',
        coreEngine: '核心引擎',
        step1: {
          title: '创意生成',
          desc: '将草图或概念瞬间转化为专业的平面设计稿与工艺单。',
        },
        step2: {
          title: '虚拟样衣',
          desc: '生成高度逼真的虚拟样衣图片，用于快速原型开发与评审。',
        },
        step3: {
          title: '电商出货',
          desc: '自动生成模特商拍图与电商列表，实现多平台快速上线。',
        },
        step4: {
          title: '智造集成',
          desc: '无缝连接设计端与生产端，打通从视觉到排产的最后一步。',
        },
      },
      footer: {
        desc: '下一代 AI 视觉解决方案。为创作者提供高分辨率工作流和智能编辑。',
        platform: '平台',
        company: '公司',
        careers: '加入我们',
        privacy: '隐私政策',
        terms: '服务条款',
        wechatTitle: '加入我们的社区',
        wechatDesc: '扫码进入微信小程序开启创作',
        rights: '© 2026 Tourfly AI. 保留所有权利。',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
