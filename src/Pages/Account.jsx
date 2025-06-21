import React from 'react';
import AccountCard from '../Components/AccountCard';
export default function Account() {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-4 mb-6 ">
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
