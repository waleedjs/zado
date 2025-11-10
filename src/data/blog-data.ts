import { IBlogDT } from "@/types/blog-d-t";

// Helper function to get current date in DD. MMM. YYYY format
const getCurrentDate = () => {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  return `${day}. ${month}. ${year}`;
};

// blog images


// blog modern
import b_m_1 from "@/assets/img/inner-blog/blog-standard/blog-1.jpg";
import b_m_2 from "@/assets/img/inner-blog/blog-standard/blog-2.jpg";
import b_m_3 from "@/assets/img/inner-blog/blog-standard/blog-3.jpg";
import b_m_4 from "@/assets/img/inner-blog/blog-standard/blog-4.jpg";
import b_m_5 from "@/assets/img/inner-blog/blog-standard/blog-5.jpg";
import b_m_6 from "@/assets/img/inner-blog/blog-standard/blog-6.jpg";
import b_m_7 from "@/assets/img/inner-blog/blog-standard/blog-7.jpg";




export const blog_modern: IBlogDT[] = [
  {
    id: 16,
    slug: "the-psychology-behind-great-logos-what-makes-people-remember-a-brand",
    img: b_m_2,
    title: 'The Psychology Behind Great Logos: What Makes People Remember a Brand',
    date: getCurrentDate(),
    category: 'Brand Design & Psychology',
    author: 'ZADO Team',
    desc: "Discover the psychological principles that make logos memorable and how great brands leverage color, shape, and typography to create lasting impressions.",
    imgAlt: "Psychology of Logo Design - Understanding Brand Recognition",
    imgTitle: "How Psychology Influences Logo Design and Brand Memory",
    content: `
<p>Why do some logos stay in your head while others disappear? It’s not luck or just “good design.” It’s how our minds work. When it comes to great logos, they are all built on psychology. What people see, feel, and remember without thinking about it all matters in the design process.</p>
<p>The best <a href="/about">brands</a> understand this and design around perception, not decoration.</p>
<h2>The Power of First Impressions</h2>
<p>The brain reacts fast. The first second someone sees a logo, they already have an opinion. That split-second judgment shapes whether they trust a brand or scroll past it. Studies show that people form visual associations almost instantly, and those early cues later affect recall.</p>
<p>Clean, simple logos stick better. With so much information around all the time, the mind typically doesn’t want to decode too much. If there’s too much going on, the message gets lost.</p>
<p>However, if a logo is direct, meaning it’s easy to read and process, it anchors itself faster. That’s how recognition builds.</p>
<h2>Color Psychology and Emotional Triggers</h2>
<p>Color is one of the easiest things for the brain to remember. Around 80% of brand recognition can be linked to color alone. Blue tends to mean trust. Red sparks energy and urgency. Green often feels fresh and balanced.</p>
<p>But color meanings aren’t fixed. They shift depending on culture and context. What looks dull in one place might look harsh in another. That’s why, when you’re choosing brand colors, the theory isn’t just about what looks nice — it’s about matching the tone your audience already relates to. <a href="/contact">Contact us</a> to discuss your brand's color strategy.</p>
<h2>Shapes and Symbolism in Design</h2>
<p>Shapes do a lot of talking, too. Circles feel friendly and safe. Squares look stable and reliable. Triangles give off movement and edge.</p>
<p>Research also shows that angular shapes often read as premium or powerful, while rounded forms feel softer, more casual. Simple shapes help memory. You remember what’s clear. That’s why a mark that’s stripped down to its essence lasts longer than one overloaded with meaning. <a href="/about">Learn more about our design philosophy</a> and how we create impactful brand identities.</p>
<h2>Typography and Personality</h2>
<p>Fonts shape how a brand “talks.” A serif font feels classic and serious. Sans-serif feels modern and straightforward. Script fonts feel more personal or artistic. None of these is better than the others — they just say different things.</p>
<p>Typography is a pretty serious aspect of branding. In layman's terms, it’s all about ‘tone’. Choosing the wrong typeface can make your brand feel off. For instance, a formal company using a playful font or a luxury brand going with something too basic is something that gives off unserious energy.</p>
<p>So, font choice quietly sets the mood before any words are read. <a href="/home">Explore our homepage</a> to see typography in action across our brand.</p>
<h2>Consistency and Memory Retention</h2>
<p>You can’t expect people to remember your brand if the logo keeps changing. Recognition comes from repetition. When the same mark, colors, and layout appear everywhere —on your website, social media, or even a sign —it starts to stick in people’s minds.</p>
<p>Look at Nike’s swoosh. It has been tweaked over the years, but the core idea has stayed the same. Apple did something similar, making minor updates without ever redoing it entirely. That steady familiarity builds trust. When people keep seeing the same look, they recognise it automatically, even before reading the name.</p>
<h2>Conclusion</h2>
<p>To sum it all up, a good logo isn’t made to impress other designers; it’s made to connect with people. Your logo helps people feel something real and remember it without trying. The colors, shapes, and type all play their part in that.</p>
<p>When you look at your own logo, forget the trends for a second. Ask if it actually feels like your brand. Does it give the right first impression? Does it stay in someone’s mind after they’ve moved on? That’s the real test of a great logo — it’s not just seen, it’s remembered.</p>
    `
  },
  {
    id: 15,
    slug: "how-responsive-design-impacts-brand-credibility-and-seo",
    img: b_m_1,
    title: 'How Responsive Design Impacts Brand Credibility and SEO',
    date: getCurrentDate(),
    category: 'Web Design & SEO',
    author: 'ZADO Team',
    desc: "Discover how responsive design enhances brand credibility and boosts SEO performance in today's mobile-first digital landscape.",
    imgAlt: "Responsive Web Design Impact on Brand Credibility and SEO Performance",
    imgTitle: "How Mobile-First Design Affects Brand Trust and Search Rankings",
    content: `
<p>Most people don’t really use desktops anymore. Phones, tablets, even TVs—people just expect websites to work wherever they are. And they notice fast if something’s off.</p>
<p>If your <a href="/services">site</a> doesn’t work on a phone—buttons too small, text hard to read, pictures cut off—it makes the whole <a href="/about">business</a> look sloppy. Doesn’t matter if your product is fantastic. People see the website first and make up their minds. That’s why responsive design isn’t optional. It’s just how sites need to be now.</p>
<h2>First Impressions Count</h2>
<p>Visitors decide in a few seconds if they’ll stay or leave. Menus that don’t work, tiny text, images overlapping, buttons you can’t tap—they leave. And it’s not just that they leave. They remember it. They assume you ignore details.</p>
<p>A responsive site fixes that automatically. Layouts adjust, text becomes readable, images fit the screen, and everything works the way it should. People don’t have to think about it—they just feel like your <a href="/about">brand</a> knows what it’s doing.</p>
<h2>Google Notices Too</h2>
<p>Google mostly looks at mobile now. They call it mobile-first indexing. If your site is messy on a phone, your ranking drops. Slow pages, broken layouts, frustrated visitors—Google notices all of it.</p>
<p>A responsive site keeps people around, reduces bounce, and signals to Google that your site is useful. Ignore mobile, and you’re basically losing traffic without realising it.</p>
<h2>Consistency Builds Trust</h2>
<p>Branding is subtle. People notice if your site looks different on different devices—logo in the wrong place, colours off, menus missing—small things like that matter. Responsive design keeps everything consistent. Same logo, same colours, same layout. Visitors feel like they “know” the <a href="/about">brand</a>. That builds trust, without you saying a word.</p>
<h2>Speed Matters</h2>
<p>Mobile users don’t wait. A few seconds of lag, and they leave. Responsive design isn’t just resizing elements. It’s optimising images, cleaning code, and making pages load fast. Fast sites keep people around, let them explore more, and increase conversions. Slow sites do the opposite—they make the <a href="/about">brand</a> look careless.</p>
<h2>Quick Comparison: Responsive vs Non-Responsive Websites</h2>
<table>
  <thead>
    <tr>
      <th>Feature / Impact</th>
      <th>Responsive Design</th>
      <th>Non-Responsive Design</th>
      <th>Effect on Brand & SEO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mobile Navigation</td>
      <td>Easy to use, intuitive</td>
      <td>Complicated to use, frustrating</td>
      <td>Builds trust vs frustrates users</td>
    </tr>
    <tr>
      <td>Load Time</td>
      <td>Optimised, faster</td>
      <td>Slow, heavy pages</td>
      <td>Keeps users engaged vs increases bounce</td>
    </tr>
    <tr>
      <td>Visual Consistency</td>
      <td>Same across all devices</td>
      <td>Looks different across devices</td>
      <td>Professional & reliable vs sloppy</td>
    </tr>
    <tr>
      <td>Google Ranking</td>
      <td>Mobile-first indexing optimised</td>
      <td>Poor mobile usability</td>
      <td>Helps SEO vs hurts SEO</td>
    </tr>
    <tr>
      <td>User Engagement</td>
      <td>Longer sessions, more clicks</td>
      <td>Short visits, low interaction</td>
      <td>Positive perception vs negative</td>
    </tr>
  </tbody>
</table>
<h2>Real-World Impact of Website Speed</h2>
<p>Some companies ignored mobile for years. Bounce rates were high, engagement was low, and people didn’t stick around. Once they redesigned responsively, everything changed. People stayed longer, explored more, and the site felt professional. The product didn’t change, and prices didn’t change. Just the experience. That’s how big responsive design can be for credibility and SEO.</p>
<h2>Conclusion</h2>
<p>A responsive <a href="/services">website</a> isn’t extra anymore. People judge your <a href="/services">business</a> by it before they even talk to you. It affects first impressions, trust, and how easy it is for them to use your site. If it’s messy or broken, your <a href="/about">brand</a> looks sloppy. If it works, it feels solid, professional, and reliable.</p>
<p>Pick up your phone and try your <a href="/services">site</a>. Tap around, scroll, click everything. If it’s slow, confusing, or frustrating, it’s hurting your <a href="/services">business</a>.</p>
<p><a href="/home">ZADO</a> can fix that. Make your <a href="/services">website</a> work on every device so people actually have a good experience. That’s the kind of thing they remember, and it’s what makes your <a href="/services">business</a> look credible.</p>
    `
  },
  {
    id: 14,
    slug: "why-rebranding-can-be-the-best-move-for-a-growing-business",
    img: b_m_4,
    title: 'Why Rebranding Can Be the Best Move for a Growing Business',
    date: getCurrentDate(),
    category: 'Brand Strategy & Growth',
    author: 'ZADO Team',
    desc: "Explore why rebranding is essential for growing businesses and how it can revitalize your brand identity to stay competitive.",
    imgAlt: "Rebranding Benefits for Growing Businesses",
    imgTitle: "Why Rebranding Helps Businesses Grow",
    content: `
<p>If your <a href="/about">brand</a> stays the same for too long, people can stop paying attention. It happens more than you think. Companies change, markets move, and what made sense a few years ago might no longer fit.</p>
<p>Let’s dive into why rebranding is one of the most significant influences a <a href="/about">brand</a> can make to stay competitive in the market.</p>
<h2>When a Brand Outgrows Its Identity</h2>
<p>A lot of <a href="/services">businesses</a> start with a look and a voice that works at first. But over time, it can feel off. Maybe your colours look tired, your logo feels stuck in the past, or your message doesn’t click with the people you’re trying to reach. That’s a warning sign.</p>
<p>Customers don’t stay the same. Trends move, expectations shift, and competitors keep changing things, too. If your <a href="/about">brand</a> stays still, it can look outdated even if your product is solid.</p>
<h2>Why Rebranding Matters</h2>
<p>Rebranding is more than making things look nice. It’s a way to line up your <a href="/about">brand</a> with what you’re actually doing now. New services, new markets, new goals — your <a href="/about">brand</a> should show that.</p>
<p>It’s also about perception. A refreshed identity can make people take notice. It can make you feel like a player in the market instead of a leftover from years ago. And it doesn’t need to erase your history. You can keep what works and just make it feel right today.</p>
<h2>The Risk of Staying Stale</h2>
<p>People judge a company by how it looks and sounds. If your visuals feel old or messy, your customers might assume the company isn’t moving forward, even if it is.</p>
<p>Because of this, a slight change now and then can help your <a href="/services">business</a>. Customers may walk to someone whose <a href="/about">brand</a> feels current. Investors and partners might see the same thing. Stale <a href="/about">brands</a> can make growth harder, not because of the product, but because of perception.</p>
<h2>Steps to Do It Right</h2>
<p>Rebranding isn’t just putting on a new logo. It’s bigger than that.</p>
<p>First, you need to know who you’re even talking to.</p>
<p>Your audience changes with the market, and so should you. If you’re not sure about your clientele, a look at what others are doing can be helpful. That gives you a sense of what works now.</p>
<p>Then figure out what your <a href="/about">brand</a> really means today.</p>
<p>What do you stand for? How do you want people to feel when they see your name? Don’t overthink it —just make it clear enough that it’s obvious.</p>
<p>Next is design.</p>
<p>Your colours, your logo, your words, all that stuff needs to make sense with what you just decided. But don’t throw out everything familiar. Keep bits people already know, so it doesn’t feel like a completely new company.</p>
<p>Finally, roll it out.</p>
<p><a href="/services">Website</a>, socials, everywhere. Make sure it all shows the change, but it doesn’t have to be perfect. People notice small things, so consistency is good, but it doesn’t have to be flawless.</p>
<h2>When Rebranding Pays Off</h2>
<p>Some big names have done it well. Airbnb changed its logo and message to feel more community-driven. Dropbox simplified its look to feel modern and easy to use. Burberry blended its classic identity with bold new designs, capturing attention once more.</p>
<p>The point isn’t copying them. It’s that these <a href="/about">brands</a> didn’t just change how they looked — they fixed how people felt about them. And it worked.</p>
<h2>Conclusion</h2>
<p>Rebranding isn’t just for looks. It’s about staying relevant, connecting with people, and growing. If your <a href="/about">brand</a> feels stuck, it might be time to rethink it. Done right, it makes you stronger, clearer, and more confident.</p>
<p>At <a href="/home">ZADO</a>, we help <a href="/about">brands</a> do that. We take what’s working and make it feel right for today. If your <a href="/about">brand</a> feels old or off, a rebrand can give it new life.</p>
    `
  },
];


export const blog_data: IBlogDT[] = [
  ...blog_modern,
]
