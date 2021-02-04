<?php

// Report simple running errors
//error_reporting(E_ERROR | E_PARSE);
error_reporting(E_ALL);
libxml_use_internal_errors(true);

/**
 * Class JsonXMLElement
 */
class JsonXMLElement extends SimpleXMLElement implements JsonSerializable {

    /**
     * Specify data which should be serialized to JSON
     *
     * @return mixed data which can be serialized by json_encode.
     */
    public function jsonSerialize() {
        return (object) (array) $this;
    }

}

$item_counter = 0;
//-- Creates an empty XML document. Note that this document will be returned to the client as 
//-- an HTTP response.
$dataXMLDocument = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><data></data>');

// Check if we receive a search keyword
if (isset($_GET["query"]) && !empty($_GET["query"])) {
    $search_keyword = $_GET["query"];
    //-- Load the XML files that contains the information about the books. 
    $rootElement = simplexml_load_file("products.xml");
    if (!($rootElement instanceof SimpleXMLElement)) {

        //-- Oh no! Failed to open the XML file.
        $errors = libxml_get_errors();
        $errorStr = "Invalid XML " . (!empty($errors)) ? "(" . count($errors) .
                " errors returned):\n" : '. Unknown error.' . "\n";
        foreach ($errors as $key => $error)
            $errorStr .= ($key + 1) . ")  " . $error->message . "\n";
        echo 'Error ' . $errorStr;
        exit;
    }
    //-- Loop through all the books found in the file.	
    foreach ($rootElement as $items) {
        //var_dump($items->category);exit;
        if (stripos($items->category, $search_keyword) !== false) {
            $item_counter++;
            //-- Add an element named "item" to the document 
            $new_item = $dataXMLDocument->addChild("items");
            foreach ($items as $element) {
                $new_item->addChild($element->getName(), $element);
            }
        }
    }
    //-- Add the item counter to the response.
    $new_item = $dataXMLDocument->addChild("count", $item_counter);
} else {
    echo "A search keyword must be provided.";
}
//-- Now we build the HTTP response. However, we need to set the mim-type of 
// response to text/xml.
header('Content-Type: application/json');
// Disable caching.
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
//-- Embed the JSON document in the HTTP response body as well-formatted JSON string.
$xml = simplexml_load_string($dataXMLDocument->asXML(), 'JsonXMLElement');
//var_dump($xml);
echo json_encode($xml, JSON_PRETTY_PRINT), "\n";
?>
