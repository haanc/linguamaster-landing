import React from 'react';
import { CheckCircle, Download } from 'lucide-react';

export const AuthCallbackPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Email Verified!
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8">
          Your email has been successfully verified. You can now return to the LinguaMaster app and sign in.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-200"
          >
            <Download className="w-5 h-5" />
            Download LinguaMaster
          </a>

          <p className="text-gray-500 text-sm">
            Already have the app? Just open it and sign in!
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Having trouble?{' '}
            <a href="mailto:support@linguamaster.top" className="text-violet-400 hover:text-violet-300">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
