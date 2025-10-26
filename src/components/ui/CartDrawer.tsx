"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
   <div className="">
     <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
         <motion.div
  className="fixed right-4 top-4 bottom-4 h-[calc(100%-2rem)] w-full sm:w-[470px] bg-white z-50 shadow-xl flex flex-col rounded-2xl"
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                Your Cart <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">0</span>
              </h2>
              <button onClick={onClose}>
                <X className="w-5 h-5 text-gray-500 hover:text-gray-800" />
              </button>
            </div>

            {/* Empty Cart Content */}
            <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
              <div className="bg-blue-100 p-5 rounded-full mb-4">
                <Image
                  src="/images/empty-cart-icon.png"
                  alt="Empty Cart"
                  width={60}
                  height={60}
                />
              </div>
              <p className="text-gray-800 font-medium mb-4">Your cart is empty</p>
              <button className="bg-sky-200 text-black font-medium px-5 py-2 rounded-full hover:bg-sky-300 transition">
                <Link href="/products/allproduct"> <span >Explore Collection</span></Link>
              </button>
            </div>

            {/* Footer */}
            <div className="border-t px-6 py-4">
              <div className="flex justify-between text-gray-800 font-medium mb-3">
                <span>Subtotal</span>
                <span>$0</span>
              </div>
              <button
                disabled
                className="w-full py-3 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
   </div>
  );
}
