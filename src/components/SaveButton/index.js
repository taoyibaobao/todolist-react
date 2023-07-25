import useOnlineStatus from '../../hooks/useOnlineStatus';

export default function StatusButton() {
  const isOnline = useOnlineStatus();

  return (
    <button disabled={!isOnline} onClick={() => { console.log('click! ✅ Progress saved') }}>
      { isOnline ? 'Save progress' : 'Reconnecting...' }
    </button>
  );
}