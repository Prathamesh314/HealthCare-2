"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };

  const handleReviewChange = (e:any) => {
    setReview(e.target.value);
  };

  const handleSubmit = async () => {

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, review }),
      });

      if (response.ok) {
        alert('Review submitted successfully!');
      } else {
        alert('Error submitting review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    }
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Review:
        <textarea value={review} onChange={handleReviewChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Send Review</button>
    </div>
  );
};

export default ContactForm;
