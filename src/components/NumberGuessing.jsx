import { useState, useRef } from 'react';
import { RotateCcw, Trophy, XCircle } from 'lucide-react';

export default function NumberGuessing() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 0 and 100');
  const [attempts, setAttempts] = useState(10);
  const [hasStarted, setHasStarted] = useState(false);
  const [showModal, setShowModal] = useState(null); 
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  const initGame = () => {
    setTargetNumber(Math.floor(Math.random() * 101));
    setUserGuess('');
    setAttempts(10);
    setHistory([]);
    setMessage('Enter your first guess!');
    setHasStarted(true);
    setShowModal(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const resetGame = () => {
    setHasStarted(false);
    setShowModal(null);
    setUserGuess('');
    setMessage('Guess a number between 0 and 100');
  };

  const handleGuess = (e) => {
    e.preventDefault();
    const guess = parseInt(userGuess);

    if (userGuess === '' || isNaN(guess) || guess < 0 || guess > 100) return;

    const newAttempts = attempts - 1;
    setAttempts(newAttempts);
    setHistory([guess, ...history]);

    if (guess === targetNumber) {
      setShowModal('win');
    } else if (newAttempts === 0) {
      setShowModal('lose');
    } else {
      setMessage(guess < targetNumber ? 'Higher! ↑' : 'Lower! ↓');
    }
    setUserGuess('');
    inputRef.current?.focus();
  };

  return (
    <section id="numberguessing" className="relative bg-[#171717] py-24 px-6 min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="text-[25vw] font-black italic font-space-grotesk text-white select-none">GAME</h2>
      </div>

      <div className="max-w-xl w-full relative z-10">
        <div className="bg-white border-2 border-neutral-900 rounded-[3rem] p-8 md:p-12 shadow-[16px_16px_0px_0px_#b91c1c]">
          
          <div className="text-center mb-8">
            <h2 className="font-space-grotesk font-black italic text-3xl uppercase tracking-tighter text-neutral-900">
              Number Guessing Game
            </h2>
          </div>

          {!hasStarted ? (
            <div className="text-center py-10">
              <p className="mb-8 font-medium text-neutral-500 italic">Rules: You have 10 tries to guess a number between 0-100. Are you ready? :)</p>
              <button 
                onClick={initGame}
                className="w-full bg-neutral-900 text-white font-black italic uppercase py-5 rounded-2xl hover:bg-red-700 transition-all shadow-xl scale-105"
              >
                Start Game
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center py-6 bg-neutral-50 rounded-2xl border-2 border-dashed border-neutral-200">
                <p className="font-space-grotesk font-bold text-xl text-neutral-800 italic uppercase">
                  {message}
                </p>
                <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase mt-2 block">
                  {attempts} Attempts Remaining
                </span>
              </div>

              <form onSubmit={handleGuess} className="space-y-4">
                <input
                  ref={inputRef}
                  type="text"
                  inputMode="numeric"
                  value={userGuess}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || /^\d+$/.test(val)) setUserGuess(val);
                  }}
                  placeholder="?"
                  className="w-full text-6xl font-black font-space-grotesk text-center py-6 border-2 border-neutral-900 rounded-3xl bg-white text-black focus:ring-4 focus:ring-red-700/10 outline-none"
                />
                
                <div className="flex gap-3">
                  <button 
                    type="submit"
                    className="flex-1 bg-red-700 text-white font-black italic uppercase py-4 rounded-2xl hover:bg-neutral-900 transition-all shadow-lg active:scale-95"
                  >
                    Submit Guess
                  </button>
                  <button 
                    type="button"
                    onClick={resetGame}
                    className="p-4 border-2 border-neutral-900 rounded-2xl hover:bg-neutral-100 transition-colors"
                    title="Reset Game"
                  >
                    <RotateCcw className="w-6 h-6 text-neutral-900" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white border-4 border-neutral-900 p-10 rounded-[3rem] max-w-sm w-full text-center transform animate-in zoom-in duration-300">
            {showModal === 'win' ? (
              <div className="flex flex-col items-center">
                <Trophy className="w-20 h-20 text-yellow-500 mb-4" />
                <h3 className="text-3xl font-black italic font-space-grotesk uppercase">Winner!</h3>
                <p className="mt-2 text-neutral-600">The number was indeed <span className="font-bold text-neutral-900">{targetNumber}</span>.</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <XCircle className="w-20 h-20 text-red-600 mb-4" />
                <h3 className="text-3xl font-black italic font-space-grotesk uppercase">Game Over</h3>
                <p className="mt-2 text-neutral-600">You ran out of tries! It was <span className="font-bold text-neutral-900">{targetNumber}</span>.</p>
              </div>
            )}
            <button 
              onClick={initGame}
              className="mt-8 w-full bg-neutral-900 text-white font-black italic uppercase py-4 rounded-xl hover:bg-red-700 transition-all"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
