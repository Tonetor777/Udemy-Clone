import React, { useState } from 'react';
import { Popover } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PopoverCard from '../popover-card/PopoverCard';
import StarsRating from '../stars-rating/StarsRating';
import styles from './Card.module.css';

const Card = ({ course }) => {
  const { title, visible_instructors, image_304x171: image, rating, id } = course;
  const instructors = visible_instructors.map(instr => instr.title).join(', ');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const openPopover = (event) => setAnchorEl(event.currentTarget);
  const closePopover = () => setAnchorEl(null);

  const handleClick = () => navigate(`/Udemy-Clone-ReactJS/courses/${id}`);

  return (
    <>
      <div
        aria-owns={Boolean(anchorEl) ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={openPopover}
        onMouseLeave={closePopover}
        className={styles.courseWrapper}
        onClick={handleClick}
      >
        <article className={styles.card}>
          <figure className={styles.wrapper}>
            <img src={image} alt={title} />
          </figure>
          <section className={styles.body}>
            <p className={styles.title}>{title}</p>
            <p className={styles.instructors}>{instructors}</p>
            <p className={styles.rating}>{rating.toFixed(1)}</p>
            <StarsRating rating={rating} />
            <p className={styles.price}>$15</p>
          </section>
        </article>
      </div>

      <Popover
        id="mouse-over-popover"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        sx={{ pointerEvents: 'none', zIndex: 50000 }}
        PaperProps={{
          onMouseEnter: openPopover,
          onMouseLeave: closePopover,
          sx: { pointerEvents: 'auto' },
        }}
        disableRestoreFocus
        disableScrollLock
      >
        <PopoverCard course={course} />
      </Popover>
    </>
  );
};

export default Card;
