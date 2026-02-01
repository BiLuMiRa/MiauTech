"use client";

import { supabase } from "../../lib/supabase";
import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Vets from "@/src/components/miaujuda/Vets";
import Busca from "@/src/components/miaujuda/busca";

export default function Home() {
  return (
    <div>
      <Busca />
      <Vets />
    </div>
  );
}
