import { useParams } from "react-router-dom";
import { useState } from "react";
import { umkmData } from "../Data/umkm.js";

export const useUmkmDetail = () => {
  const { id } = useParams();
  const umkm = umkmData.find((u) => u.id.toString() === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('deskripsi');

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === umkm.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? umkm.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // URL untuk embed Google Maps
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${umkm?.location?.lat},${umkm?.location?.lng}&zoom=15`;
  
  // URL untuk link ke Google Maps
  const mapsLink = `https://www.google.com/maps?q=${umkm?.location?.lat},${umkm?.location?.lng}&hl=id&z=15`;

  return {
    // Data
    umkm,
    
    // State
    currentImageIndex,
    activeTab,
    
    // Computed values
    googleMapsUrl,
    mapsLink,
    
    // Actions
    nextImage,
    prevImage,
    goToImage,
    setActiveTab
  };
};