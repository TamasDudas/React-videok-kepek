import React from 'react';
import AccountCard from './AccountCard';

export default function Account() {
  return (
    <div>
      <h3 className="my-6">Belépés és Regisztráció</h3>
      <div className=" flex justify-center gap-8 mb-6">
        <div className="w-1/2">
          <AccountCard name="Belépés" clear="Törlés" />
        </div>
        <div className="w-1/2">
          <AccountCard name="Küldés" showButton={false} />
        </div>
      </div>
    </div>
  );
}
