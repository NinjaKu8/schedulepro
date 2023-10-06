
import { StripSimpleBreakdownField, StripSimpleBreakdownPages, StripSimpleStatus, StripSimpleComplete, StripSimpleBreakdownDuration } from "./components"

// you can optionally pass in a breakdownId to override the prop values

type Props = {
  breakdownId?: string;
  checkbox?: string | JSX.Element;
  className?: string;
  description?: string | JSX.Element;
  duration?: string | JSX.Element;
  gridName: string; // name of css grid that gives this strip shape
  hasCheckbox?: boolean;
  hasDescription?: boolean;
  hasDuration?: boolean;
  hasPages?: boolean;
  hasScene?: boolean;
  hasSlugline?: boolean;
  hasStatus?: boolean;
  pages?: string | JSX.Element;
  sc?: string | JSX.Element;
  slugline?: string | JSX.Element;
  status?: string | JSX.Element;
  [x: string]: any;
}

export function StripSimple({ breakdownId, className, gridName='progress-report', hasScene=true, hasPages=true, hasDuration=true, hasSlugline=true, hasDescription=true, hasStatus=true, hasCheckbox=true, sc, pages, duration, slugline, description, status, checkbox, ...rest }: Props): JSX.Element {
  return (
    <div className={`${gridName} ${className}`} {...rest}>
      {hasScene && 
        <div className={`${gridName}__sc text-center small w-100`}>
          {breakdownId 
            ? <StripSimpleBreakdownField breakdownId={breakdownId} field='sc' />
            : sc
          }
        </div>
      }
      {hasPages && 
        <div className={`${gridName}__pgs text-center small`}>
          {breakdownId 
            ? <StripSimpleBreakdownPages breakdownId={breakdownId} />
            : pages
          }
        </div>
      }
      {hasDuration && 
        <div className={`${gridName}__duration text-center small`}>
          {breakdownId 
            ? <StripSimpleBreakdownDuration breakdownId={breakdownId} />
            : duration
          }
        </div>
      }
      {hasSlugline && 
        <div className={`${gridName}__slugline small`}>
          {breakdownId 
            ? <StripSimpleBreakdownField breakdownId={breakdownId} field='slugline' />
            : slugline
          }
        </div>
      }
      {hasDescription && 
        <div className={`${gridName}__description small`}>
          {breakdownId 
            ? <StripSimpleBreakdownField breakdownId={breakdownId} field='description' />
            : description
          }
        </div>
      }
      {hasStatus && 
        <div className={`${gridName}__status text-center small`}>
          {breakdownId 
            ? <StripSimpleStatus breakdownId={breakdownId} />
            : status
          }
        </div>
      }
      {hasCheckbox && 
        <div className={`${gridName}__checkbox text-center small`}>
          {breakdownId 
            ? <StripSimpleComplete breakdownId={breakdownId} />
            : checkbox
          }
        </div>
      }
    </div>
  )
}