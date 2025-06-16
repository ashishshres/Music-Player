import { useEffect, useState } from 'react';

function AlertBox() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (!visible) return null;

  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      It only plays for 30 seconds. In future, I will make it support full-length songs.
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => setVisible(false)}
        style={{ background: 'none', border: 'none', fontSize: '1.5rem', lineHeight: '1', padding: 0 }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default AlertBox;
