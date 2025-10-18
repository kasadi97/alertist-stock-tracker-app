"use client";
import { useState } from "react";

const WatchlistButton = ({ symbol, company, isInWatchlist, showTrashIcon = false, type = 'button', onWatchlistChange }: WatchlistButtonProps) => {
  const [added, setAdded] = useState<boolean>(!!isInWatchlist);

  const toggle = () => {
    const next = !added;
    setAdded(next);
    onWatchlistChange?.(symbol, next);
  };

  if (type === 'icon') {
    return (
      <button
        type="button"
        aria-label={added ? `Remove ${symbol} from watchlist` : `Add ${symbol} to watchlist`}
        onClick={toggle}
        className={`watchlist-icon-btn ${added ? 'watchlist-icon-added' : 'watchlist-icon'}`}
        title={company}
      >
        ★
      </button>
    );
  }

  return (
    <button type="button" onClick={toggle} className="watchlist-btn">
      {added ? (showTrashIcon ? 'Remove from Watchlist' : 'In Watchlist') : 'Add to Watchlist'}
    </button>
  );
};

export default WatchlistButton;
