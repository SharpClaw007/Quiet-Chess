/* Quiet Move: loads multi-threaded Stockfish and stops it cleanly if this browser can't run threads. */
(function(){var W=self.Worker,n=0,main=!/,worker$/.test(self.location.hash);
  self.Worker=function(u,o){if(++n>24){if(main)postMessage('qm:mtfail');self.close();throw new Error('thread limit')}return new W(u,o)};
  if(main)self.addEventListener('error',function(){postMessage('qm:mtfail')});})();
importScripts('stockfish-19-lite.js');
