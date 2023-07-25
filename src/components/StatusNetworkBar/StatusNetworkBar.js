import useOnlineStatus from '../../hooks/useOnlineStatus';

export default function StatusNetworkBar() {
  const isOnline = useOnlineStatus();

  return (
    <div className='network-status'>
      <h2>{ isOnline ? '✅ Online' : '❌ Disconnected' }</h2>
    </div>
  );
}