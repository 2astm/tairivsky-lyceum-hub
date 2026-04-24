import React from 'react';

export function HandsModal() {
  return (
    <div>
      <svg viewBox="0 0 540 225" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', borderRadius: 8, background: 'var(--tyk-panel)', marginBottom: 14 }}>
        <text x="90"  y="18" textAnchor="middle" fontSize="10" fill="#8892a4" fontFamily="monospace" letterSpacing="1">ЛІВА РУКА</text>
        <text x="390" y="18" textAnchor="middle" fontSize="10" fill="#8892a4" fontFamily="monospace" letterSpacing="1">ПРАВА РУКА</text>
        {/* Left palm */}
        <rect x="30" y="138" width="120" height="58" rx="18" fill="#1e2026" stroke="#2a2d35" strokeWidth="1"/>
        {/* Left fingers */}
        <rect x="32"  y="70" width="22" height="72" rx="11" fill="#f76f6f" opacity=".85"/>
        <rect x="58"  y="53" width="22" height="88" rx="11" fill="#f5a623" opacity=".85"/>
        <rect x="84"  y="43" width="22" height="98" rx="11" fill="#3ecf8e" opacity=".85"/>
        <rect x="110" y="56" width="22" height="86" rx="11" fill="#4f8ef7" opacity=".85"/>
        <rect x="128" y="146" width="18" height="40" rx="9" fill="#a78bfa" opacity=".85" transform="rotate(-30 137 166)"/>
        <circle cx="121" cy="136" r="4" fill="#fff" opacity=".85"/>
        {/* Left finger labels */}
        <text x="43"  y="66" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace">М</text>
        <text x="69"  y="49" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace">Б</text>
        <text x="95"  y="39" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace">С</text>
        <text x="121" y="52" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace">В</text>
        {/* Left key zones */}
        <text x="43"  y="106" textAnchor="middle" fontSize="7.5" fill="#f76f6f" fontFamily="monospace">я ш щ</text>
        <text x="69"  y="106" textAnchor="middle" fontSize="7.5" fill="#f5a623" fontFamily="monospace">і ц х</text>
        <text x="95"  y="106" textAnchor="middle" fontSize="7.5" fill="#3ecf8e" fontFamily="monospace">в у е</text>
        <text x="121" y="106" textAnchor="middle" fontSize="7.5" fill="#4f8ef7" fontFamily="monospace">а к р</text>
        {/* Right palm */}
        <rect x="330" y="138" width="120" height="58" rx="18" fill="#1e2026" stroke="#2a2d35" strokeWidth="1"/>
        {/* Right fingers */}
        <rect x="348" y="56" width="22" height="86" rx="11" fill="#4f8ef7" opacity=".85"/>
        <rect x="374" y="43" width="22" height="98" rx="11" fill="#3ecf8e" opacity=".85"/>
        <rect x="400" y="53" width="22" height="88" rx="11" fill="#f5a623" opacity=".85"/>
        <rect x="426" y="70" width="22" height="72" rx="11" fill="#f76f6f" opacity=".85"/>
        <rect x="330" y="146" width="18" height="40" rx="9" fill="#a78bfa" opacity=".85" transform="rotate(30 339 166)"/>
        <circle cx="359" cy="136" r="4" fill="#fff" opacity=".85"/>
        {/* Right finger labels */}
        <text x="359" y="52" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace">В</text>
        <text x="385" y="39" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace">С</text>
        <text x="411" y="49" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace">Б</text>
        <text x="437" y="66" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace">М</text>
        {/* Right key zones */}
        <text x="359" y="106" textAnchor="middle" fontSize="7.5" fill="#4f8ef7" fontFamily="monospace">п н г</text>
        <text x="385" y="106" textAnchor="middle" fontSize="7.5" fill="#3ecf8e" fontFamily="monospace">р о ш</text>
        <text x="411" y="106" textAnchor="middle" fontSize="7.5" fill="#f5a623" fontFamily="monospace">л щ з</text>
        <text x="437" y="106" textAnchor="middle" fontSize="7.5" fill="#f76f6f" fontFamily="monospace">д ж є</text>
        {/* Spacebar */}
        <rect x="210" y="188" width="120" height="20" rx="10" fill="#a78bfa" opacity=".45"/>
        <text x="270" y="202" textAnchor="middle" fontSize="8" fill="#e8eaf0" fontFamily="monospace">ПРОБІЛ — великі пальці</text>
      </svg>

      <div className="tyk-hands-tips">
        <div>· Зап'ястя не лежать на столі під час набору</div>
        <div>· Лікті під кутом ~90°, вільно вздовж тіла</div>
        <div>· Вихідне положення: <b>Ф І В А</b> і <b>П Р О Л</b></div>
        <div>· Крапки на <b>А</b> та <b>О</b> — орієнтири без погляду</div>
        <div>· Кожен палець відповідає за свій стовпець</div>
        <div>· Погляд тільки на текст, не на клавіатуру</div>
      </div>
    </div>
  );
}
