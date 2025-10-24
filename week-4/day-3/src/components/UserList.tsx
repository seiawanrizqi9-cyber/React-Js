import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { fetchUsers } from '../store/slices/usersSlice';

const UserList = () => {
  const { items, status, error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
        Users from API
      </h2>

      {status === 'loading' && <p className="text-center text-blue-500">Loading...</p>}
      {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}

      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {items.map((user) => (
            <div
              key={user.id}
              className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 w-full"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{user.name}</h3>
              <p className="text-sm text-blue-500 mt-2">{user.email}</p>
              <p className="text-xs text-gray-500 mt-1">{user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;