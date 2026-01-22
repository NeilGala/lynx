/**
 * Authentication Screen Component
 * Handles phone verification and OTP input
 */

import React, { useState } from 'react';
import { ICONS } from '../../constants/icons';
import { COUNTRIES } from '../../config/countries.config';
import { validatePhoneNumber, validateOTP, isDigitsOnly } from '../../utils/validation';
import { Button, Input } from '../ui';

interface AuthScreenProps {
  onComplete: () => void;
  onBack: () => void;
}

type AuthStep = 'phone' | 'otp';

export const AuthScreen: React.FC<AuthScreenProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState<AuthStep>('phone');
  const [loading, setLoading] = useState(false);
  const [countryIndex, setCountryIndex] = useState(0);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const selectedCountry = COUNTRIES[countryIndex];

  /**
   * Handles phone/OTP submission
   * TODO: Integrate with backend authentication service
   */
  const handleNext = async () => {
    setError('');

    if (step === 'phone') {
      // Validate phone number
      if (!phone.trim()) {
        setError('Phone number cannot be empty.');
        return;
      }
      if (!validatePhoneNumber(phone, selectedCountry.length)) {
        setError(`Please enter a valid ${selectedCountry.length}-digit number for ${selectedCountry.name}.`);
        return;
      }

      // TODO: Call authentication service to send OTP
      // await authService.sendOTP(phone, selectedCountry.code);
      
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep('otp');
      }, 1000);
    } else {
      // Validate OTP
      if (!validateOTP(otp)) {
        setError('Please enter the full 6-digit code.');
        return;
      }

      // TODO: Call authentication service to verify OTP
      // await authService.verifyOTP(phone, otp.join(''));
      
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onComplete();
      }, 1000);
    }
  };

  /**
   * Updates OTP digit and auto-focuses next input
   */
  const updateOtp = (value: string, index: number) => {
    if (!isDigitsOnly(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-white p-4">
      <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="mb-8 text-zinc-500 hover:text-zinc-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors"
        >
          <span className="rotate-180">{ICONS.ChevronRight}</span> Back to Home
        </button>
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-white/10">
            <span className="text-black font-black text-3xl tracking-tighter">L</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome to Lynx</h1>
          <p className="text-zinc-500 text-sm">
            {step === 'phone' 
              ? "We use phone verification to keep Lynx spam-free." 
              : "Enter the 6-digit code sent to your device."}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {step === 'phone' ? (
            /* Phone Input */
            <div className="flex gap-2">
              <div className="relative w-32">
                <select 
                  value={countryIndex}
                  onChange={(e) => setCountryIndex(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-700 text-sm appearance-none cursor-pointer"
                >
                  {COUNTRIES.map((c, i) => (
                    <option key={c.name} value={i}>
                      {c.code} {c.name.slice(0,2)}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                  {ICONS.ChevronDown}
                </div>
              </div>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="555 000-0000"
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all text-lg"
              />
            </div>
          ) : (
            /* OTP Input */
            <div className="flex gap-2 justify-center">
              {otp.map((digit, i) => (
                <input 
                  key={i}
                  id={`otp-${i}`}
                  type="text" 
                  maxLength={1}
                  value={digit}
                  onChange={(e) => updateOtp(e.target.value, i)}
                  className="w-12 h-14 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
                />
              ))}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-[10px] font-bold uppercase text-center tracking-widest animate-pulse">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <Button
            onClick={handleNext}
            isLoading={loading}
            fullWidth
            size="lg"
            className="mt-4"
          >
            {step === 'phone' ? 'Send Code' : 'Verify & Continue'} {ICONS.ChevronRight}
          </Button>

          {/* Resend Code */}
          {step === 'otp' && (
            <button 
              onClick={() => setStep('phone')} 
              className="w-full text-zinc-500 text-[10px] font-bold uppercase tracking-widest hover:text-zinc-300"
            >
              Resend code or change number
            </button>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-10 max-w-[240px] mx-auto leading-relaxed">
          By continuing, you agree to our trust-first guidelines and reputation system.
        </p>
      </div>
    </div>
  );
};
