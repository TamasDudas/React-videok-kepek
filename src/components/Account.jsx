import React from 'react';
import AccountCard from './AccountCard';

export default function Account() {
  return (
    <div>
      <h3 className="my-6">Belépés és Regisztráció</h3>
      <div className="grid grid-cols-2 gap-4 mb-6 ">
        <div>
          <AccountCard formName="Belépés" btnName="Belépés" clear="Törlés" />
        </div>
        <div>
          <AccountCard
            formName="Regisztráció"
            btnName="Küldés"
            isSigin={false}
          />
        </div>
      </div>
    </div>
  );
}
