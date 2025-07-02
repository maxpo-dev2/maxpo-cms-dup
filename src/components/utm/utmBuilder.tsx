"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import TextArea from "@/components/form/input/TextArea";

// Yup Validation Schema
const validationSchema = Yup.object().shape({
  url: Yup.string().url("Enter a valid URL").required("URL is required"),
  source: Yup.string().required("Source is required"),
  medium: Yup.string().required("Medium is required"),
  campaign: Yup.string().required("Campaign is required"),
  term: Yup.string(),
  content: Yup.string(),
});

export default function UTMBuilder() {
  const formik = useFormik({
    initialValues: {
      url: "",
      source: "",
      medium: "",
      campaign: "",
      term: "",
      content: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  const generateUTM = () => {
    const { url, source, medium, campaign, term, content } = formik.values;
    const params = new URLSearchParams();
    if (source) params.set("utm_source", source);
    if (medium) params.set("utm_medium", medium);
    if (campaign) params.set("utm_campaign", campaign);
    if (term) params.set("utm_term", term);
    if (content) params.set("utm_content", content);
    return url ? `${url}?${params.toString()}` : "";
  };

  const handleCopy = async () => {
    const utm = generateUTM();
    if (utm) {
      await navigator.clipboard.writeText(utm);
      alert("Copied UTM URL to clipboard.");
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] lg:p-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { name: "url", label: "Website URL *", placeholder: "https://yourdomain.com/page" },
          { name: "source", label: "Source *", placeholder: "e.g. google" },
          { name: "medium", label: "Medium *", placeholder: "e.g. cpc" },
          { name: "campaign", label: "Campaign *", placeholder: "e.g. summer_sale" },
          { name: "term", label: "Term", placeholder: "e.g. shoes" },
          { name: "content", label: "Content", placeholder: "e.g. banner_ad" },
        ].map(({ name, label, placeholder }) => (
          <div key={name}>
            <Label>{label}</Label>
            <Input
              name={name}
              defaultValue={formik.values[name as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={placeholder}
            />
            {formik.touched[name as keyof typeof formik.touched] &&
              formik.errors[name as keyof typeof formik.errors] && (
                <p className="mt-1 text-xs text-red-500">
                  {formik.errors[name as keyof typeof formik.errors]}
                </p>
              )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Label>Generated UTM URL</Label>
        <TextArea
          className="bg-gray-50 text-sm rounded-xl mt-1 dark:bg-white/[0.03] dark:text-white"
          value={generateUTM()}
          
        />
        <div className="mt-3 flex justify-end">
          <Button type="button" onClick={handleCopy}>
            Copy to Clipboard
          </Button>
        </div>
      </div>
    </form>
  );
}
