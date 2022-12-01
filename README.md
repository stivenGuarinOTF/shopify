# Shopify ERP Migration and Integration

Link: [Link to this doc](https://github.com/ON-THE-FUZE/DiscoveryPhase-ShopifyERP)

Author(s): Stiven Guarin

Status: Draft

Last Updated: 2022-11-04

## Contents

- [Goals](#goals)
- [Non-Goals](#non-goals)
- [Background](#background)
- [Overview](#overview)
    - [Introduction](#introduction)
    - [The HubSpot-built integration for Shopify](#the-hubSpot-built-integration-for-shopify)
    - [Shopify API](#shopify-api)
    - [General risks](#risks)
- [Considerations](#considerations)
- [Metrics](#metrics)

## Links

- [Shopify API docs](https://shopify.dev/api)
- [HubSpot-built integration for Shopify](https://ecosystem.hubspot.com/marketplace/apps/marketing/ecommerce/shopify)

## Objective

OTF is looking for new products and services to offer to its clients. Recently, some clients have been interested in Integration and Migration Services regarding ERP Systems and Hubspot. For this reason, this Discovery phase is intended to describe tools, products and services from Shopify ERP that might help our team design and implement new services for our clients

## Goals

- Determine the viability and scope of migrations or integrations between Hubspot and Shopify.
- Estimate the limitations of migrations or integrations between Hubspot and Shopify.
- Determine the risks associated with migrations or integrations between Hubspot and Shopify.
- Estimate how long migration or integration between Hubspot and Shopify could take.


## Non-Goals

- To propose a specific route map on how to start with a project with Shopify ERP, given that this will depend on our client's needs and configurations.

## Background

- Client: OTF

- [Clickup Task](https://app.clickup.com/t/3qnq1ft)

- We have not used Shopify ERP before.

- This will be a starting point to familiarize ourselves with Shopify ERP so we can start planning different projects for our clients.

- The backend team will be the most impacted by these projects.

## Overview

For this discovery phase, we pretend to show what tools Shopify offer to developers so we can plan, design and implement an integration or migration project for our clients depending on our needs.

### **Introduction**

To carry out integrations or migrations from shopify to hubspot there are two methods:

- **The HubSpot-built integration for Shopify: :** This is an integration already created by hubspot that allows you to sync some objects between shopify and hubspot. (easier method to implement and faster, but very limited). The HubSpot-built integration for Shopify which can be downloaded [here](https://app.hubspot.com/ecosystem/22571056/marketplace/apps/marketing/ecommerce/shopify).

- **Shopify API :** The Shopify API allows us to generate a connection with Shopify and have greater control of the data found there, in addition, through this connection we can generate complex integrations or migrations that may not be possible through the HubSpot-built integration for Shopify. Information about this API can be found [here](https://shopify.dev/api) (more complex method, may take more time to develop and implement but with a greater scope).

Depending on the complexity of the project and the client's requirements, the method that best suits the client's needs can be chosen, taking into account the scope and limitations of each method.


### **The HubSpot-built integration for Shopify**

#### **What do we need to be able to migrate or integrate?**

1. Have a compatible HubSpot plan

    - Free Tools & CRM (Free)
    - Marketing Hub (Starter, Professional, or Enterprise)
    - Sales Hub (Starter, Professional, or Enterprise)
    - Service Hub (Starter, Professional, or Enterprise)
    - CMS Hub (Starter, Professional, or Enterprise)
    - Operations Hub (Starter, Professional, or Enterprise


2. Have one of the following Shopify software subscription plans.

    - Basic Shopify
    - Shopify
    - Advanced Shopify

_Note: This integration does not require an additional payment to download, it is only necessary to have one of the accounts mentioned above._

#### **How complex is it, and why?**

The implementation of this method is quite simple. Simply open the HubSpot account you want to sync with Shopify, go to App marketplace and install [the integration](https://app.hubspot.com/ecosystem/22571056/marketplace/apps/marketing/ecommerce/shopify) built by Hubspot for Shopify. Here it will only be asked for the name of the account with which you want to synchronize in Shopify, carry out the respective authentications, grant the permissions in Shopify and that's it.

Later, we can go to the apps connected to our Hubspot account and configure the installed integration, which has a very intuitive and easy-to-use interface.

#### **What are the limitations?**

- It only allows synchronizing the data of the Customers, Orders, and Products of Shopify to the Contacts, Deals, and Products of Hubspot respectively.

- Limited workflows. We cannot modify enrollment triggers in the default e-commerce workflows.

The details of the limitations and more information about the scope of this method can be found [here](https://knowledge.hubspot.com/integrations/how-do-i-use-the-shopify-integration?_ga=2.137165488.1494469059.1667584410-881961491.1667584410)

#### **What range of time can take a project of these??**
This method is the easiest and fastest to implement since its installation can be done quickly and the integration can be activated at any time, synchronizing and migrating information very quickly. Obviously, this all depends on the amount of data to be handled, but in general this should not take more than 1 sprint (5 business days).


### **Shopify API**

#### **What do we need to be able to migrate or integrate?**

1. Have a Shopify account (Basic, Shopify, or advanced) where you can create and configure a [custom app](https://help.shopify.com/en/manual/apps/custom-apps) to be able to interact with Shopify data and features through its [admin API](https://shopify.dev/api/admin).

2. Create a private app in Hubspot to also interact with the data and functionalities in Hubspot

#### **How complex is it, and why?**

1. **Mapping:** The respective mapping would have to be done to determine the properties of the objects that we need to relate between Shopify and Hubspot, depending on the client's requirements and if it is necessary to adjust accounts with custom properties.

1. **Develop code:** The first thing would be to connect with Shopify, for this, the authentication process must be carried out with the custom app created, which will allow us to make requests and interact with the features available in the admin API from Shopify. It should be noted that the Shopify admin API supports REST and GraphQL. Next, I leave the authentication information, scope, and use of the different endpoints for each case:

    - [REST](https://shopify.dev/api/admin-rest)
    - [GraphQL](https://shopify.dev/api/admin-graphql)

After we have the necessary data from Shopify we would have to synchronize it with the corresponding HubSpot account and this would also be done through the app created in HubSpot implemented in the code.

#### **What are the limitations?**

- The REST Admin API supports a limit of 40 requests per app per store per minute. This allotment replenishes at a rate of 2 requests per second. 

- We can control the data of the objects and their respective properties displayed [here](https://shopify.dev/api/liquid/objects)

The details of the limitations and more information about the scope of this method can be found [here](https://shopify.dev/api/admin-rest)

#### **What range of time can take a project of these??**

Since for this method it is necessary to build and implement a code from scratch according to the needs of the client, the complete development process must be done depending on whether it is an integration or migration. For example, the process for a migration is as follows:

1. Mapping
2. Account setup 
3. Development code 
4. Estimate times for migration (only to migrations)
5. Migration (only to migrations)
6. Develop QA code
7. QA
8. QA Issues to be Fixed (If apply)

Thus, this time is relative depending on the complexity of the project, the client's requirements and the amount of data to be handled. If it is a simple integration it can take up to 1 sprint but if it is a migration with a considerable number of objects it takes a minimum of 2 sprints or more.

### **General risks**

- When it comes to migrations, it is important to first make sure that no other existing active integration can affect the desired result of the project.

- When we manage private applications that can access information from different platforms, it is necessary to manage accounts, passwords, tokens, etc. Therefore, it is important to handle this information with all security protocols and limit it only to the necessary information.


## **Considerations**

When data is generated through integrations created by Hubspot, it is necessary to validate how that data is taken to Hubspot, since it has been identified with some integrations that sometimes the data is incorrectly synchronized, for this reason, it is important to validate a few synchronized objects before synchronizing all objects.

## **Metrics**

Before starting a migration or integration, the status of the accounts must be validated, that is, if there is already some information migrated, if there is an active integration, amount of data to migrate, custom properties, or other elements that may affect migration or integration.