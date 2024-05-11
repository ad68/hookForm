import React, { useState, useContext, useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ defaultValue, className, register, ...rest }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(className);
  }, []);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <input className={`border border-silver p-4 rounded-md ${className && String(className)}`} defaultValue={defaultValue} type="text" {...register} {...rest} />;
}

/* export default function Index({ register, defaultValue }) {
 
  return <input className="border border-silver p-4 rounded-md" defaultValue={defaultValue} type="text" {...register} />;
} */
