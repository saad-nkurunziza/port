"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const OneTimeDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const hasShownDialog = localStorage.getItem("hasShownDialog");

    if (!hasShownDialog) {
      localStorage.setItem("hasShownDialog", "true");
      setShowDialog(true);
    }
  }, []);

  const closeDialog = () => {
    setShowDialog(false);
    localStorage.setItem("hasShownDialog", "true");
  };

  return (
    <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Info</AlertDialogTitle>
          <AlertDialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            suscipit, quasi voluptatum omnis{" "}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Ndakwiyamye</AlertDialogCancel> */}
          <AlertDialogAction>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OneTimeDialog;
