import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { increment, decrement, reset } from '../store/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow text-center max-w-xs mx-auto mb-10">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Counter</h2>
      <p className="text-4xl font-bold text-blue-600 mb-6">{count}</p>
      <div className="space-x-3">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">+</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">–</button>
        <button onClick={() => dispatch(reset())} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Reset</button>
      </div>
    </div>
  );
};

export default Counter;