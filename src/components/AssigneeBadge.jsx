export default function AssigneeBadge({ name, uid, currentUid }) {
  const isMe = uid === currentUid;
  const isTogether = uid === 'together';

  const colorClass = isTogether
    ? 'bg-purple-100 text-purple-700'
    : isMe
    ? 'bg-blue-100 text-blue-700'
    : 'bg-pink-100 text-pink-700';

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colorClass}`}>
      {isTogether ? '👫 ' : isMe ? '👤 ' : '👤 '}{name}
    </span>
  );
}
