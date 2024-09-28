import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="pt-12 pb-12">
      <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        <div>
          <div className="text-2xl text-red-700 font-semibold mb-4">
            NFTFY Shop
          </div>
          <p className="text-gray-700 text-sm mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            deserunt modi tempora.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <FaFacebookF className="w-6 h-6 text-pink-60" />
            <FaTwitter className="w-6 h-6 text-pink-60" />
            <FaYoutube className="w-6 h-6 text-pink-60" />
            <FaInstagram className="w-6 h-6 text-pink-60" />
          </div>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="footer-title">MarketPlace</h1>
          <p className="footer-link">All NFTs</p>
          <p className="footer-link">Art</p>
          <p className="footer-link">Music</p>
          <p className="footer-link">Collectibles</p>
          <p className="footer-link">Wallets</p>
        </div>
        <div className="lg:mx-auto mx-0">
          <h1 className="footer__title">Company</h1>
          <p className="footer-link">Explor</p>
          <p className="footer-link">About</p>
          <p className="footer-link">Contact US</p>
          <p className="footer-link">Our Blog</p>
          <p className="footer-link">FAQ</p>
        </div>
        <div className="xl:mx-auto md:mx-auto lg:mx-0 mx-0">
          <h1 className="footer__title">My Account</h1>
          <p className="footer-link">Authors</p>
          <p className="footer-link">Collections</p>
          <p className="footer-link">Author Profile</p>
          <p className="footer-link">Create Item</p>
          <p className="footer-link">NFT Profile</p>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-black opacity-75">
        Copyright © 2024 by Ahad
      </div>
    </div>
  );
}

export default Footer
