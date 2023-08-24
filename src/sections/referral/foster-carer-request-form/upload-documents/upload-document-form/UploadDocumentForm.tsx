import React from 'react'
import Link from 'next/link'
import { Button, Dialog, DialogContent, Grid, Typography } from '@mui/material'
import { FormProvider } from "@root/components/hook-form";
import { useUploadDocumentForm } from "./useUploadDocumentForm"

const UploadDocumentModal = (props: any) => {
  const { openModal, setOpenModal, disabled } = props

  const {
    UploadDocoment,
    methods,
    handleSubmit,
    onSubmit
  } = useUploadDocumentForm()


  return (
    <Dialog open={openModal} maxWidth='sm' onClose={() => setOpenModal(!openModal)}>
      <DialogContent sx={styles.modal}>
        <Typography sx={styles.title}>Person Uploaded : Name Xame</Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container columnSpacing={4}>
            {UploadDocoment?.map((item: any) => (
              <Grid item xs={12} md={item?.md} key={item?.id}>
                <item.component
                  {...item.componentProps}

                  disabled={disabled}
                  size={"small"}
                >
                  {item.componentProps.select

                    ? item.options.map((option: any) => (

                      <option key={option.value} value={option.value}>


                        {option.label}

                      </option>

                    ))

                    : null}
                  {item?.heading}
                </item.component>
              </Grid>
            ))}

            <Grid sx={{ paddingTop: "40px" }} item xs={12}>
              {
                !disabled && (
                  <Button type="submit" variant="contained" sx={{ mr: 2 }}>
                    Upload
                  </Button>
                )
              }
              <Link
                href={""}
                style={{ textDecoration: "none" }}
              >
                <Button onClick={() => setOpenModal(false)} type="button" variant="contained" sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}>
                  Clear
                </Button>
              </Link>
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>

  )
}

const styles = {
  modal: { width: 600, p: 2, mb: 20 },
  title: { mb: 5, mt: 3, fontSize: 16, fontWeight: 600 },
}

export default UploadDocumentModal