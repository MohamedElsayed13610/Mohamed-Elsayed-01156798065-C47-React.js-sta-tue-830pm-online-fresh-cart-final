import { PackageOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({ title = 'Nothing here yet', text = 'Browse products and start shopping.', action = true }) {
  return (
    <div className="empty-state">
      <div className="empty-icon"><PackageOpen /></div>
      <h3>{title}</h3><p>{text}</p>
      {action && <Link className="btn btn-primary" to="/products">Browse products</Link>}
    </div>
  );
}
