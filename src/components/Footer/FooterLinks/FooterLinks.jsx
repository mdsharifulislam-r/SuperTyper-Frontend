import React from 'react'
import FooterLink from './FooterLink'

export default function FooterLinks() {
    const productLink = [
        {
            label:"Pricing"
        },
        {
            label: "Type Test"
        },
        {
            label: "Benifits"
        },
        {
            label: "tour"
        },
        {
            label: "Features"
        },
    ]
    const CustomerLink = [
        {
            label: "Customers"
        },
        {
            label: "Case Studies"
        },
        {
            label: "industres"
        },
       
    ]
    const ResorseLink = [
        {
            label: "Sarvice by Typing tester"
        },
        {
            label: "Customer GuideLine"
        },
        {
            label: "Reports"
        },
        {
            label: "Typeing Speed Test"
        },
        {
            label: "News Latter"
        },
    ]
    const SupportLink = [
        {
            label: "Help Center"
        },
        {
            label: "Webiners"
        },
        {
            label: "Pertner Marketplace"
        },
        {
            label: "Api And developments"
        },
        {
            label: "System Status"
        },
    ]
  return (
    <div className="lg:flex lg:justify-evenly grid grid-cols-2 md:grid-cols-3 "> 
          <FooterLink title={"Products"} links={productLink} />
          <FooterLink title={"Customers"} links={CustomerLink} />
          <FooterLink title={"Ressorse"} links={ResorseLink} />
          <FooterLink title={"Support"}  links={SupportLink}/>
          
    </div>
  )
}
