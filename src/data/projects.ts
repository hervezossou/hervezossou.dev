import ballamasCover from "../../public/ballamas-cover.png";
import tokenaCover from "../../public/tokena-cover.png";
import kemacoCover from "../../public/kemaco-cover.png";

export const projects = [
    {
      title: 'Kemaco Sarl Website',
      description: 'A website for a company that specializes in building modern construction using shipping container. It showcases their services with a modern design, easy navigation, and a responsive layout that works well on all devices.',
      image: kemacoCover,
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
      url: 'https://kemaco.pro/'
    },
    {
      title: 'Ballamas - E-commerce',
      description: 'A landing page for an e-commerce website that sells sports equipment and apparel. The page features a clean and modern design, with a focus on showcasing the products and providing a seamless shopping experience.',
      image: ballamasCover,
      tags: ['HTML', 'CSS', 'JavaScript', 'Mock.shop API'],
      url: 'https://figma-to-code-ed2-week2-gamma.vercel.app/'
    },
    {
      title: 'Tokena - Crypto Tracker',
      description: 'Tokena is a cryptocurrency tracker that provides real-time data on various cryptocurrencies, including their prices, market capitalization, and trading volume.',
      image: tokenaCover,
      tags: ['HTML', 'CSS', 'JavaScript', 'Coingecko API'],
      url: 'https://figma-to-code-ed2-week3-topaz.vercel.app/'
    }
]