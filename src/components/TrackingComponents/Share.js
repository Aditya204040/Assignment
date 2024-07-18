import React from 'react';
import Button from '../button';
import { toast } from 'react-toastify';
const ShareButton = ({ speed }) => {
  const handleShare = () => {
    const url = new URL(window.location);
    url.searchParams.set('speed', speed);
    navigator.clipboard.writeText(url.toString());
    return toast.success(`URL Successfully copied to clipboard.`,{
      position: "top-center",
      autoClose: 2000 
  })
  };

  return <Button onClick={handleShare} text={"Share"}></Button>;
};

export default ShareButton;
