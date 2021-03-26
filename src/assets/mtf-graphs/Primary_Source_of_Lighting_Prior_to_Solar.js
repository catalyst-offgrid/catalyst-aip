export default {"width": 800, "height": 400, "config": {"title": {"fontSize": 18, "font": "Times New Roman", "anchor": "center", "fontColor": "#000000"}, "axisX": {"domain": true, "domainColor": "#000000", "grid": false, "labelFont": "Times New Roman", "labelFontSize": 14, "titleFont": "Times New Roman", "titleFontSize": 14, "titleFontWeight": "normal", "title": "X Axis Title (units)"}, "axisY": {"domain": true, "grid": false, "gridColor": "#DEDDDD", "gridWidth": 1, "labelFont": "Times New Roman", "labelFontSize": 14, "labelAngle": 0, "ticks": false, "titleFont": "Times New Roman", "titleFontSize": 14, "titleFontWeight": "normal", "titlePadding": 10, "title": "Y Axis Title (units)"}, "range": {"category": ["#2980B9", "#003366", "#FFAE19", "#D68910", "#E67E22", "#D35400", "#FF4500", "#FF6162", "#438B28", "#45B39D", "#99ADC1", "#212F3C"]}, "legend": {"labelFont": "Times New Roman", "labelFontSize": 14, "symbolType": "square", "symbolSize": 100, "titleFont": "Times New Roman", "titleFontSize": 14, "titleFontWeight": "normal", "title": "Legend", "orient": "right", "offset": 0}, "tooltip": {"font": "Open Sans"}, "view": {"stroke": "transparent", "text": {"font": "Times New Roman", "color": ["#2980B9", "#003366", "#FFAE19", "#D68910", "#E67E22", "#D35400", "#FF4500", "#FF6162", "#438B28", "#45B39D", "#99ADC1", "#212F3C"], "fontSize": 14, "align": "right", "fontWeight": 400, "size": 14}, "bar": {"size": 40, "binSpacing": 1, "continuousBandSize": 30, "discreteBandSize": 30, "fill": ["#2980B9", "#003366", "#FFAE19", "#D68910", "#E67E22", "#D35400", "#FF4500", "#FF6162", "#438B28", "#45B39D", "#99ADC1", "#212F3C"], "stroke": false}}, "font": "Times New Roman"}, "concat": [{"layer": [{"mark": {"type": "bar", "color": "#2980B9"}, "encoding": {"tooltip": {"type": "nominal", "field": "c_c_156"}, "x": {"type": "nominal", "axis": {"title": " "}, "field": "c_c_156", "sort": {"field": "c_c_156", "op": "count", "order": "descending"}}, "y": {"type": "quantitative", "aggregate": "sum", "axis": {"format": "%", "title": ""}, "field": "pct"}}, "selection": {"selector314": {"type": "single", "fields": ["Primary_stove_type"], "bind": {"input": "select", "options": [null, "Three stone/Open fire", "Manufactured stove", "Other Self-Built Stove", "Other"], "labels": ["All responses", "Three stone/Open fire", "Manufactured stove", "Self-Built Stove", "Other"], "name": "Primary cookstove  "}}, "selector313": {"type": "single", "fields": ["Primary_1st_fuel"], "bind": {"input": "select", "options": [null, "Firewood", "Charcoal", "LPG/cooking gas", "Kerosene"], "labels": ["All responses", "Firewood", "Charcoal", "LPG/cooking gas", "Kerosene"], "name": "Primary source of cooking fuel  "}}, "selector316": {"type": "single", "fields": ["hh_grid"], "bind": {"input": "select", "options": [null, "Yes", "No"], "labels": ["All responses", "Yes", "No"], "name": "Is the household connected to the national grid?  "}}, "selector311": {"type": "single", "fields": ["locality_ur"], "bind": {"input": "select", "options": [null, "Urban", "Rural"], "labels": ["National", "Urban", "Rural"], "name": "Locality Breakdown  "}}, "selector312": {"type": "single", "fields": ["elc_aggr_tier"], "bind": {"input": "select", "options": [null, "Tier 0", "Tier 1", "Tier 2", "Tier 3", "Tier 4"], "labels": ["All Tiers", "Tier 0", "Tier 1", "Tier 2", "Tier 3", "Tier 4"], "name": "Electricity Tier  "}}}, "transform": [{"joinaggregate": [{"op": "count", "field": "*", "as": "total"}]}, {"calculate": "1 / datum.total", "as": "pct"}]}, {"mark": {"type": "text", "align": "center", "baseline": "bottom", "size": 15}, "encoding": {"text": {"type": "quantitative", "aggregate": "sum", "field": "pct", "format": ".2%"}, "tooltip": {"type": "nominal", "field": "c_c_156"}, "x": {"type": "nominal", "axis": {"title": " "}, "field": "c_c_156", "sort": {"field": "c_c_156", "op": "count", "order": "descending"}}, "y": {"type": "quantitative", "aggregate": "sum", "axis": {"format": "%", "title": ""}, "field": "pct"}}, "transform": [{"joinaggregate": [{"op": "count", "field": "*", "as": "total"}]}, {"calculate": "1 / datum.total", "as": "pct"}]}], "height": 500, "title": {"text": ["Primary Source of Lighting Prior to Solar"], "color": "black", "font": "Times New Roman"}, "transform": [{"filter": {"selection": "selector314"}}, {"filter": {"selection": "selector313"}}, {"filter": {"selection": "selector316"}}, {"filter": {"selection": "selector311"}}, {"filter": {"selection": "selector312"}}], "width": 800}], "data": {"name": "data-eccea51c612aa7fa093c76ae9cefc6ac"}, "title": {"text": ["", "", "This chart includes responses from 2.04% of households in the Kenya MTF survey sample (total size = 4,590).", "Use the dropdown filters to interact with the data."], "anchor": "start", "baseline": "bottom", "font": "Times New Roman", "fontSize": 15, "fontStyle": "italic", "fontWeight": "normal", "orient": "bottom"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json", "datasets": {"data-eccea51c612aa7fa093c76ae9cefc6ac": [{"elc_aggr_tier": "Tier 2", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "Yes", "c_c_156": "Other", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 4", "locality_ur": "Rural", "Primary_1st_fuel": "Kerosene", "Primary_stove_type": "Manufactured stove", "hh_grid": "Yes", "c_c_156": "National grid connection", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 2", "locality_ur": "Urban", "Primary_1st_fuel": "Kerosene", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Generator", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Kerosene", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "LPG/cooking gas", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 2", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Dry-cell battery", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 2", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Urban", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 2", "locality_ur": "Rural", "Primary_1st_fuel": "LPG/cooking gas", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Rechargeable battery", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 4", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 2", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Non-rechargeable lanterns", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Non-rechargeable lanterns", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Urban", "Primary_1st_fuel": "LPG/cooking gas", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Rechargeable battery", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "National grid connection", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Other", "hh_grid": "No", "c_c_156": "Other", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Urban", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Other Self-Built Stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Kerosene", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 2", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Kerosene", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Other Self-Built Stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Not applicable", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Other", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Generator", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Other", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Dry-cell battery", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Other", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Other", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Dry-cell battery", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 2", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Dry-cell battery", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Other Self-Built Stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Non-rechargeable lanterns", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Dry-cell battery", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Other", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 3", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Urban", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Dry-cell battery", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "Yes", "c_c_156": "National grid connection", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Non-rechargeable lanterns", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 3", "locality_ur": "Urban", "Primary_1st_fuel": "LPG/cooking gas", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "LPG/cooking gas", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Other", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 4", "locality_ur": "Urban", "Primary_1st_fuel": "Charcoal", "Primary_stove_type": "Manufactured stove", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 1", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 0", "locality_ur": "Urban", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}, {"elc_aggr_tier": "Tier 2", "locality_ur": "Rural", "Primary_1st_fuel": "Firewood", "Primary_stove_type": "Three stone/Open fire", "hh_grid": "No", "c_c_156": "Kerosene, candles or other fuel-based lighting", "elc_access": "Yes"}]}}