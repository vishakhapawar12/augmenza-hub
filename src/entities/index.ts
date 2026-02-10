/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: departments
 * Interface for Departments
 */
export interface Departments {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  departmentName?: string;
  /** @wixFieldType text */
  contactEmail?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  contactPerson?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  deliveryModel?: string;
  /** @wixFieldType boolean */
  benchResourceSupport?: boolean;
  /** @wixFieldType text */
  customizationDetails?: string;
}


/**
 * Collection ID: socialmedia
 * Interface for SocialMedia
 */
export interface SocialMedia {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  platformName?: string;
  /** @wixFieldType url */
  profileUrl?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  platformLogo?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}
